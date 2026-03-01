import { Link } from "react-router-dom";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import { useEffect, useState } from "react";
import type { Project } from "../../types/project";
import { supabase } from "../../api/supabase";

function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(`*, tech_stacks (*)`)
        .order("start_date", { ascending: false })
        .limit(3);

      if (error) {
        console.error("Error fetching projects:", error);
        return;
      }

      setProjects(data);
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <section>
      <h1>프로젝트</h1>
      <ProjectGrid projects={projects} variant="main" />
      <Link to="/projects">→ View All Projects</Link>
    </section>
  );
}

export default FeaturedProjects;
