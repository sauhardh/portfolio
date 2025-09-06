import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <div className="font-fira p-0 m-0">
      <div className="m-5">
        <Header />
        <main className="flex-col justify-center text-center my-10 mt-35">
          <Hero />
          <Projects />
          <Blogs />
        </main>
      </div>
      <Tools />
      <Footer />
    </div>
  );
}