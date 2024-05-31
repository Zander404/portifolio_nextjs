import About from "@/Components/About/About";
import Footer from "@/Components/Footer/Footer";
import Freelance from "@/Components/Freenlance/Freelance";
import Navbar from "@/Components/Navbar/Navbar";
import SocialMedia from "@/Components/RedeSociais/SocialMedia";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <div>
      <Navbar /> 
      <SocialMedia />

      
      <About />
      <Freelance />

      <Footer />
    </div>
  );
}
