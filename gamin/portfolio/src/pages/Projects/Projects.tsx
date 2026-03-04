import { supabase } from "../../api/supabase";
import type { Project } from "../../types/project";
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import styles from "./Projects.module.css";
import { useQuery } from "@tanstack/react-query";

function Projects() {
  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(`*, tech_stacks (*)`)
        .order("start_date", { ascending: false });

      if (error) throw error;
      return data as Project[];
    },
  });

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;

  // const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const { data, error } = await supabase
  //       .from("projects")
  //       .select(`*, tech_stacks (*)`)
  //       .order("start_date", { ascending: false });
  //     if (error) {
  //       console.error("Error fetching projects:", error);
  //       return;
  //     }

  //     setProjects(data as Project[]);
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>프로젝트</h1>
      <ProjectGrid projects={projects} variant="list" />
    </section>
  );
}

export default Projects;
