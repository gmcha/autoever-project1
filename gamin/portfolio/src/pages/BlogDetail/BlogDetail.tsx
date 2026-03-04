import { useParams } from "react-router-dom";
import { supabase } from "../../api/supabase";
import ReactMarkdown from "react-markdown";
import type { BlogData } from "../../types/blog";
import styles from "./BlogDetail.module.css";
import { useQuery } from "@tanstack/react-query";

function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  // const [post, setPost] = useState<BlogData | null>(null);
  // const [content, setContent] = useState<string>("");

  const { data: post, isLoading: isPostLoading } = useQuery<BlogData | null>({
    queryKey: ["post", slug],
    queryFn: async () => {
      if (!slug) return null;

      const { data, error } = await supabase
        .from("posts")
        .select("title, views, created_at")
        .eq("slug", slug)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!slug, // slug가 있을 때만 쿼리 실행
  });

  const { data: content = "", isLoading: isContentLoading } = useQuery<string>({
    queryKey: ["postContent", slug],
    queryFn: async () => {
      if (!slug) return "";

      const res = await fetch(`/blogs/${slug}.md`);
      if (!res.ok) return "";

      const text = await res.text();

      // SPA 환경에서 파일이 없을 때 반환되는 index.html 코드를 걸러냅니다.
      if (text.trim().toLowerCase().startsWith("<!doctype html>")) {
        return "";
      }

      return text;
    },
    enabled: !!slug,
  });

  // useEffect(() => {
  //   const fetchPostDetail = async () => {
  //     if (!slug) return;

  //     const { data, error } = await supabase
  //       .from("posts")
  //       .select("title, views, created_at")
  //       .eq("slug", slug)
  //       .single();

  //     if (error) {
  //       console.error("Error fetching post details:", error);
  //     } else {
  //       setPost(data);
  //     }
  //   };

  //   fetchPostDetail();
  // }, [slug]);

  // useEffect(() => {
  //   if (!slug) return;

  //   fetch(`/blogs/${slug}.md`)
  //     .then(async (res) => {
  //       if (!res.ok) return "";

  //       const text = await res.text();

  //       // SPA 환경에서 파일이 없을 때 반환되는 index.html 코드를 걸러냅니다. (AI 코드)
  //       if (text.trim().toLowerCase().startsWith("<!doctype html>")) {
  //         return "";
  //       }

  //       return text;
  //     })
  //     .then((text) => setContent(text));
  // }, [slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <article className={styles.article}>
      <main>
        <div className={styles.metaBlock}>
          <h1 className={styles.h1}>
            {isPostLoading ? "Loading..." : post?.title}
          </h1>
          <div>
            <div className={styles.lowerMeta}>
              <span>
                posted by <strong>차가민</strong>,
              </span>
              <span>{post?.created_at ? formatDate(post.created_at) : ""}</span>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          {isContentLoading ? (
            <p>본문을 불러오는 중입니다...</p>
          ) : content ? (
            <ReactMarkdown>{content}</ReactMarkdown>
          ) : (
            <p>작성된 내용이 없습니다.</p>
          )}
        </section>
      </main>
    </article>
  );
}

export default BlogDetail;
