import Navbar from "@/components/navbar/navbar";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import HomeSection from "@/sections/home";
import ProjectsSection from "@/sections/projects";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 w-full h-full ">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
