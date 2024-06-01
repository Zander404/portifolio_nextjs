
import About from "@/components/About/About";
import Experience from "@/components/Experiencie/Experiencie";
import Footer from "@/components/Footer/Footer";
import Freelance from "@/components/Freelance/Freelance";
import Navbar from "@/components/Navbar/Navbar";
import SocialMedia from "@/components/RedeSociais/SocialMedia";
import Skill from "@/components/Skills/Skill";


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
