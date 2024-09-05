import About from "../components/Templates/Portfolio-3/About";
import Contact from "../components/Templates/Portfolio-3/Contact";
import Experience from "../components/Templates/Portfolio-3/Experience";
import Header from "../components/Templates/Portfolio-3/Header" ;
import Hero from "../components/Templates/Portfolio-3/Hero";
import Projects from "../components/Templates/Portfolio-3/Projects";

export default function Home() {
  return (
    <div>
 <Header/>
     <Hero/> 
     <Projects/>
      < About/>
      <Experience/>
      <Contact/>
      
       

    
    </div>
  );
}
