import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div className="font-fira">
      <Header />
      <main className="flex-col justify-center text-center my-10 mt-35">
        <Hero />
        <Projects />
        <Blogs />
      </main>
      <footer>
      </footer>
    </div>
  );
}