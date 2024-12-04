import About from "@/components/section/about";
import Contact from "@/components/section/contact";
import Footer from "@/components/section/footer";
import Header from "@/components/section/header";
import Hero from "@/components/section/hero";
import Howitworks from "@/components/section/howitworks";
import Projects from "@/components/section/projects";
import Reviews from "@/components/section/reviews";
import Services from "@/components/section/services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <Howitworks />
      <Projects />
      <Reviews />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
