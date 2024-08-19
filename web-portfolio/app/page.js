import Navbar from "./navbar";
import Header from "./header"
import Work from "./work"
import Skills from "./skills";
import Experience from "./experience"
import Projects from "./projects"
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Work />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
