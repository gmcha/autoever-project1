import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../../types/project";
import { supabase } from "../../api/supabase";
import { techMap } from "../../utils/getIcons";
import ReactMarkdown from "react-markdown";

interface ProjectDetailData extends Project {
  project_details: { content: string }[];
}

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetailData | null>(null);
  const [deployContent, setDeployContent] = useState<string>("");

  useEffect(() => {
    const fetchProjectDetail = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("projects")
        .select(`*, tech_stacks (*), project_details (content)`)
        .eq("slug", slug)
        .single();

      if (error) {
        console.log("Error fetching project details:", error);
      } else {
        setProject(data as ProjectDetailData);
      }
    };

    fetchProjectDetail();
  }, [slug]);

  useEffect(() => {
    if (!slug) return;

    fetch(`/project-link/${slug}.md`)
      .then(async (res) => {
        if (!res.ok) return "";

        const text = await res.text();

        // SPA 환경에서 파일이 없을 때 반환되는 index.html 코드를 걸러냅니다. (AI 코드)
        if (text.trim().toLowerCase().startsWith("<!doctype html>")) {
          return "";
        }

        return text;
      })
      .then((text) => setDeployContent(text));
  }, [slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    return `${year}.${month}`;
  };

  const renderTechIcons = () => {
    if (!project?.tech_stacks || !Array.isArray(project.tech_stacks))
      return null;
    const resolvedTechIcons = project.tech_stacks
      .map((stack) => techMap.get(stack.name.trim().toLowerCase()))
      .filter((iconData) => iconData !== undefined);

    return (
      <div className="flex gap-2">
        {resolvedTechIcons.map((item) => (
          <img
            key={item?.name}
            src={`https://cdn.simpleicons.org/${item?.icon}/${item?.color}`}
            alt={item?.name}
            title={item?.name}
            width={24}
          />
        ))}
      </div>
    );
  };

  return (
    <article>
      <h1>{project?.title}</h1>
      <div>
        <div>
          <h3>프로젝트 설명</h3>
          <p>{project?.summary}</p>
        </div>

        <div>
          <h3>기술 스택</h3>
          {renderTechIcons()}
        </div>

        <div>
          <div>
            <h3>기간</h3>
            <p>
              {project?.start_date ? formatDate(project?.start_date) : ""} ~
              {project?.end_date ? formatDate(project.end_date) : ""}
            </p>
          </div>
          <div>
            <h3>프로젝트 형태</h3>
            <p>{project?.is_team ? "팀 프로젝트" : "개인 프로젝트"}</p>
          </div>
        </div>
      </div>

      <div>
        {deployContent ? (
          <ReactMarkdown>{deployContent}</ReactMarkdown>
        ) : (
          <span>배포 링크가 없습니다.</span>
        )}
      </div>

      <section>
        <h2>상세 내용</h2>
        <div>
          {project?.project_details?.[0]?.content || "상세 내용이 없습니다."}
        </div>
      </section>
    </article>
  );
}

export default ProjectDetail;
