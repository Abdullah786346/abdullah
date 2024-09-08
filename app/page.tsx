import AboutUs from "../components/Templates/PortfolioTemplate-5/AboutUs";
import ContactMe from "../components/Templates/PortfolioTemplate-5/ContactMe";
import Hero from "../components/Templates/PortfolioTemplate-5/Hero";
import Navbar from "../components/Templates/PortfolioTemplate-5/Navbar"; // Choose the correct path
import MyProjects from "../components/Templates/PortfolioTemplate-5/MyProjects";
import OurServices from "../components/Templates/PortfolioTemplate-5/OurServices";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <MyProjects />
      <ContactMe />
    </div>
  );
}
