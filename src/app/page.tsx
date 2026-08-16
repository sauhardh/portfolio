import { Header } from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <div className="font-fira p-0 m-0">
      <div>
        <Header />
        <main className="flex-col justify-center text-center my-10 mt-0">
          <Hero />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-20 mb-32  sm:my-32 divide-x-2 divide-border">
            <Projects />
            <Blogs />
          </div>
        </main>
        <Tools />
      </div>

      <Footer />
    </div>
  );
}
