import Navbar from "../components/Templates/PortfolioTemplate-text-5/Navbar";
import Hero from "../components/Templates/PortfolioTemplate-text-5/Hero";
import AboutUs from "../components/Templates/PortfolioTemplate-text-5/AboutUs";
import OurServices from "../components/Templates/PortfolioTemplate-text-5/OurServices";
import MyProjects from "../components/Templates/PortfolioTemplate-text-5/MyProjects";
import ContactMe from "../components/Templates/PortfolioTemplate-text-5/ContactMe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="Hero" className="min-h-screen bg-gray-100">
        <Hero />
      </section>

      <section id="AboutUs" className="min-h-screen bg-gray-200">
        <AboutUs />
      </section>

      <section id="OurServices" className="min-h-screen bg-gray-300">
        <OurServices />
      </section>

      <section id="ContactMe" className="min-h-screen bg-gray-400">
        <ContactMe />
      </section>
    </div>
  );
}
