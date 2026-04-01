import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"

const page = () => {
  return (
    <>
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <ContactBar />
        <section id="about">
          <AboutMe />
        </section>
        <section id="experience">
          <ExperienceSec />
        </section>
        <section id="education">
          <EducationSkills />
        </section>
        <section id="work">
          <LatestWork />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default page