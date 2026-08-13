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
      <div className="ml-auto mr-auto mt-40 mb-0 w-3/4 border-2 border-stone-300 border-dashed [mask-image:linear-gradient(to_right,transparent_10%,black_30%,black_70%,transparent_90%)]">
      </div>
      <Work />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
