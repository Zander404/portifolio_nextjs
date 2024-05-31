import About from "@/Components/About/About";
import Experience from "@/Components/Expreiencie/Experiencie";
import Footer from "@/Components/Footer/Footer";
import Freelance from "@/Components/Freelance/Freelance";
import Navbar from "@/Components/Navbar/Navbar";
import SocialMedia from "@/Components/RedeSociais/SocialMedia";
import Skill from "@/Components/Skills/Skill";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div className="">
      <Navbar /> 
      <SocialMedia />

      
      <About />
      <Skill />

      {/* <Freelance /> */}
      {/* <Experience /> */}

      {/* <Footer /> */}
    </div>
  );
}
