import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar/>
        <Hero
          btnText='Create Account For Free'
          title={<>Create stunning,<br/>eye-catching <span style={{ color: '#10248C' }}>portfolios</span></>}
          desc=''
        />
        <Footer/>
      </div>
    </div>
  );
}
