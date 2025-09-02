import Image from "next/image";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
// import ProjectCard from "@/components/project_card";
import Project from "@/components/projects";

export default function Home() {
  return (
    <div className="font-fira">
      <Header />

      <main className="flex-col justify-center text-center my-10 mt-35">
        <Hero />
        <Project />
      </main>


      <footer>
      </footer>

    </div>
  );
}
