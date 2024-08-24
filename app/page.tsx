import Navbar from '../components/PortfolioTemplate-5/Navbar';
import AboutUs from '../components/PortfolioTemplate-5/AboutUs';
import Hero from '../components/PortfolioTemplate-5/Hero';
import OurServices from '../components/PortfolioTemplate-5/OurServices'; // Ensure this path is correct
import MyProjects from '../components/PortfolioTemplate-5/MyProjects'; 
import ContactMe from '../components/PortfolioTemplate-5/ContactMe';

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <MyProjects />
      <ContactMe />
    </div>
  );
}
