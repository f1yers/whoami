import Resume from "@/components/Resume";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center min-h-screen px-8 pt-20 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="row-start-2 flex flex-col gap-[32px] items-start w-full">
        <Resume />
      </main>

      <Footer className="row-start-3" />

    </div>
  );
}
