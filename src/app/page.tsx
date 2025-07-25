import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen px-8 pt-5 pb-20 font-[family-name:var(--font-geist-sans)]">

      <Hero />

      <main>
        <Resume />
      </main>

      <Footer />

    </div>
  );
}
