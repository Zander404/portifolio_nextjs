
import About from "@/app/components/About/About";
import Experience from "@/app/components/Experiencie/Experiencie";
import Footer from "@/app/components/Footer/Footer";
import Freelance from "@/app/components/Freelance/Freelance";
import Navbar from "@/app/components/Navbar/Navbar";
import SocialMedia from "@/app/components/RedeSociais/SocialMedia";
import Skill from "@/app/components/Skills/Skill";


export default function Home() {
  return (
    <div className="">
      <Navbar /> 
      <SocialMedia />

      
      <About />
      <Skill />

      <Experience />
      <Freelance />

      <Footer />
    </div>
  );
}
