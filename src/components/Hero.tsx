import Image from "next/image";

export default function Hero() {
  return (
    <header className="mb-6 text-center">
      <h1 className="text-4xl font-bold">Nathan McGinnis</h1>
      <p className="text-sm text-gray-500">
        Chesapeake, VA — {" "}
        <a
          href="mailto:me@nathanmcginnis.com"
          className="hover:underline hover:underline-offset-4"
        >
          me@nathanmcginnis.com
        </a>
      </p>

      <div className="flex gap-4 justify-center items-center flex-wrap mb-2 mt-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/nmcg1nn1s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={24}
            height={24}
          />
          <span className="text-sm">LinkedIn</span>
        </a>
      </div>      
    </header>
  );
}

