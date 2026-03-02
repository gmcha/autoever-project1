import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Experience from "../../components/Experience/Experience";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import Skills from "../../components/Skills/Skills";
import TopBlogs from "../../components/TopBlogs/TopBlogs";

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <TopBlogs />
      <Contacts />
    </div>
  );
}

export default Home;
