import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  variant?: "main" | "list"; // main -> 3열, list -> 2열
}

function ProjectGrid({ projects, variant = "list" }: ProjectGridProps) {
  const isMain = variant === "main";

  return (
    <div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          layout={isMain ? "vertical" : "horizontal"}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
