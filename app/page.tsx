import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import MyProjects from '../components/MyProjects'; // Corrected import statement
import ContactMe from '../components/ContactMe';
export default function Home() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <AboutUs />
      <OurServices />
      <MyProjects /> {/* Corrected component usage */}
      <ContactMe/>
    </div>
  );
}
