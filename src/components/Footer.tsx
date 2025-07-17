import Image from "next/image";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`mt-16 text-center text-xs text-gray-500 ${className}`}>
      <div className="flex gap-4 justify-center items-center flex-wrap mb-2">
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

      <p className="font-mono text-xs text-gray-400">
        Last updated July 2025 — Powered by Next.js + Tailwind
      </p>
      <p className="font-mono text-xs text-gray-400">Hosted on Cloudflare</p>
    </footer>
  );
}

