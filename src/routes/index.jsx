import { Navbar } from "@/components/navbar/Navbar";
import "./index.css";
import { Footer } from "@/components/footer/Footer";
import { Home } from "@/components/home/Home";
import { About } from "@/components/about/About";
import { Hobby } from "@/components/hobby/Hobby";
import { Skills } from "../components/skills/Skills";
import { Contact } from "../components/contact/Contact";

export const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Hobby />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
