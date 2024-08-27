import React from 'react';
import Navbar from '../components/PortfolioTemplate-5/Navbar';
import Hero from '../components/PortfolioTemplate-5/Hero';
import AboutUs from '../components/PortfolioTemplate-5/AboutUs';
import OurServices from '../components/PortfolioTemplate-5/OurServices';
import MyProjects from '../components/PortfolioTemplate-5/MyProjects';
import ContactMe from '../components/PortfolioTemplate-5/ContactMe';

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <section id="Hero">
        <Hero />
      </section>
      <section id="AboutUs">
        <AboutUs />
      </section>
      <section id="OurServices">
        <OurServices />
      </section>
      <section id="MyProjects">
        <MyProjects />
      </section>
      <section id="ContactMe">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
