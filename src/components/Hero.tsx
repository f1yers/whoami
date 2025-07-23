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

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/f1yers/whoami"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#f0f0f0] rounded">
            <Image
              aria-hidden
              src="/github_inverted.svg"
              alt="Github icon"
              width={24}
              height={24}
            />
          </div>
          <span className="text-sm">Github</span>
        </a>
      </div>
    </header>
  );
}

