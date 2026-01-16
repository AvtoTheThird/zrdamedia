import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <section id="Home" style={{ height: 0, scrollMarginTop: "6rem" }} />{" "}
      <Header />
      <Hero />
      <section id="Services">
        <Services />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
