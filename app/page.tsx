import Navbar from "./Components/Navbar";
import Container from "./Components/Container";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Tools from "./Components/Tools";

export default function Home() {
  return (
      <main className="max-w-[1280px]">
        <div id="home" className="w-10/12 mx-auto pt-4">
          <Navbar />
        </div>
        {/* <div id="home"></div> */}
        <Container />

        {/* <div
          id="skills"
          className="box w-10/12 mx-auto max-md:mt-[0px] mt-8 mb-[-10px]"
        ></div>
        <Skills /> */}

        <div
          id="projects"
          className="box w-10/12 mx-auto max-md:mt-[0px] mt-8"
        ></div>
        <Projects />

        <div
          id="contact"
          className="box w-10/12 mx-auto max-md:mt-[0px] mt-8"
        ></div>
        <Contact />

        <div
          id="tools"
          className="box w-10/12 mx-auto max-md:mt-[0px] mt-8"
        ></div>
        <Tools />

        <div
          id="about"
          className="box w-10/12 mx-auto max-md:mt-[0px] mt-8"
        ></div>
        <About />

        <div className="w-10/12 mx-auto my-10">
          <div className="flex items-start text-2xl text-neutral-300">
            <p className="text-5xl mr-2 mt-[2px]">&#169;</p>
            All Rights Reserved
            <small className="mt-[2px] ml-2">2023</small>
          </div>
        </div>
      </main>
  );
}
