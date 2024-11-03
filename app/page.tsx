import Navbar from "../components/PortfolioTemplate-text-5/Navbar";
import Hero from "../components/PortfolioTemplate-text-5/Hero";
import AboutUs from "../components/PortfolioTemplate-text-5/AboutUs";
import OurServices from "../components/PortfolioTemplate-text-5/OurServices";
import MyProjects from "../components/PortfolioTemplate-text-5/MyProjects";
import ContactMe from "../components/PortfolioTemplate-text-5/ContactMe";
import Qualification from "@/components/PortfolioTemplate-text-5/qualification";

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

<section id="AboutUs" className="min-h-screen bg-gray-200">
        <Qualification />
      </section>
      <section id="OurServices" className="min-h-screen bg-gray-300">
        <OurServices />
      </section>
      
      <section id="MyProjects" className="min-h-screen bg-gray-300">
        <MyProjects />
      </section>

      <section id="ContactMe" className="min-h-screen bg-gray-400">
        <ContactMe />
      </section>
    </div>
  );
}
