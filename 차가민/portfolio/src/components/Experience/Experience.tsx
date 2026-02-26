import Certification from "./Certification";
import Education from "./Education";
import ExternalActivity from "./ExternalActivity";

function Experience() {
  return (
    // h1~h6 태그는 스타일 적용 때 고려할거임
    <section>
      <h1>경력사항</h1>
      <div className="experienceLayout">
        <div className="studyResume">
          <Education />
          <Certification />
          <div className="certification"></div>
        </div>
        <div className="activity">
          <ExternalActivity />
          <div className="activity"></div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
