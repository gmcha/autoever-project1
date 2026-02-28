import type { BlogPreviewCard } from "../../types/TopBlogs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../api/supabase";
import styles from "./TopBlogs.module.css";

function TopBlogs() {
  const [blogs, setBlogs] = useState<BlogPreviewCard[]>([]);

  useEffect(() => {
    const fetchTopBlogs = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("title, summary, slug")
        .eq("type", "BLOG")
        .order("created_at", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching posts:", error);
        return;
      }

      setBlogs(data);
    };

    fetchTopBlogs();
  }, []);
  return (
    <section className={styles.section}>
      <h1>Study Note</h1>

      {/* 데이터가 성공적으로 불러와졌을 때 */}
      {blogs.length > 0 && (
        <div className={styles.cardsContainer}>
          {/* 왼쪽 2개 카드 */}
          <div className="left-column">
            {blogs[0] && (
              <div className="card card-top-left">
                <h2>{blogs[0].title}</h2>
                <p>{blogs[0].summary}</p>
                <Link to={`/blog/${blogs[0].slug}`}>→ details</Link>
              </div>
            )}
            {blogs[2] && (
              <div className="card card-bottom-left">
                <h2>{blogs[2].title}</h2>
                <p>{blogs[2].summary}</p>
                <Link to={`/blog/${blogs[2].slug}`}>→ details</Link>
              </div>
            )}
          </div>

          {blogs[1] && (
            <div className="card card-bottom-left">
              <h2>{blogs[1].title}</h2>
              <p>{blogs[1].summary}</p>
              <Link to={`/blog/${blogs[1].slug}`}>→ details</Link>
            </div>
          )}
        </div>
      )}

      <div className={styles.viewAll}>
        <Link to="/blogs">→ View All Study Notes</Link>
      </div>
    </section>
  );
}

export default TopBlogs;
