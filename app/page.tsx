import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import CreatePortfolio from "@/components/CreatePortfolio";
import Categories from "@/components/Categories";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
        <Hero
       
          btnText='Create Account For Free'
          title={<>Create stunning,<br/>eye-catching <span style={{ color: '#10248C' }}>portfolios</span></>}
          desc1='Design Modern Portfolio'
          desc2='Up to 50,000 templates'
          desc3='Easy and Modern Designs'
        />
         <CreatePortfolio
       
       
       title='Create a portfolio that stands out.'
       desc='Choose from a variety of unique layouts to build an online portfolio that best displays your work. Add individual projects to keep your website organized and easy-to-navigate.'
       
     />
     <Categories
       
       
       title='Categories'
      
       
     />
      <Steps
       
       
       title='How to make an online portfolio'
      
     />
        <Footer/>
      </div>
    </div>
  );
}
