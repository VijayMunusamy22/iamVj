import About from "@/components/Core/About/About";
import Contact from "@/components/Core/Contact/Contact";
import Projects from "@/components/Core/Projects/Projects";
import Resume from "@/components/Core/Resume/Resume";

export default function Home() {
  return (
    <section className="contentContainer">
      <div
        id="about"
        className="contentItems"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <About />
      </div>
      <div
        id="projects"
        className="contentItems"
        style={{
          backgroundColor: "#2B2726",
        }}
      >
        {/* <Projects /> */}
      </div>
      <div
        id="resume"
        className="contentItems"
        style={{
          backgroundColor: "#8E43ED",
        }}
      >
        <Resume />
      </div>
      <div
        id="contact"
        className="contentItems"
        style={{
          backgroundColor: "#F0EC8B",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Contact />
      </div>
    </section>
  );
}
