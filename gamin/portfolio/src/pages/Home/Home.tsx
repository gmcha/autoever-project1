import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import TopBlogs from "../../components/TopBlogs/TopBlogs";
import TopProjects from "../../components/TopProjects/TopProjects";

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Experience />
      <TopProjects />
      <TopBlogs />
      <Footer />
      <Contacts />
    </div>
  );
}

export default Home;
