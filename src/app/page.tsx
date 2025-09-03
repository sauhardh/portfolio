import Image from "next/image";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import ProjectServer from "@/components/ProjectsServer";

export default function Home() {
  return (
    <div className="font-fira">
      <Header />

      <main className="flex-col justify-center text-center my-10 mt-35">
        <Hero />
        <ProjectServer />
      </main>

      <footer>
      </footer>

    </div>
  );
}
