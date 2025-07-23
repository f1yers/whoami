import { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Experience } from "@/types/experience";

type Props = Experience & {
  isOpen: boolean;
  onToggle: () => void;
} & Experience;

export default function RoleItem({
  title,
  company,
  date,
  bullets,
  isOpen,
  onToggle
}: Props) {

  // [state, updater]
  const [shouldBounce, setShouldBounce] = useState(true);

  useEffect(() => {
    // Run this block of code as a side effect after React renders the component
    const timeout = setTimeout(() => setShouldBounce(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="py-2">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 w-full hover:text-accent transition"
      >
        <ChevronRightIcon
          className={`text-left w-5 h-5 transition-transform duration-300 ease-in-out mr-2 
            ${isOpen ? "rotate-90" : ""}
            ${shouldBounce ? "animate-bounce" : ""}
          `}
        />
        <div className="grid grid-cols-3 w-full text-gray-700">
          <h4 className="text-sm text-left font-bold">{title}</h4>
          <p className="text-sm text-center">{company}</p>
          <p className="text-sm text-right">{date}</p>
        </div>
      </button>

      {isOpen && (
        <div className="pl-8 pt-2">
          <div
            className={`pt-2 pb-4 rounded-lg shadow-inner transition-all duration-300 ${
              isOpen ? "bg-gray-900/30" : "bg-transparent"
            }`}
          >
            <ul className="pl-1 list-disc list-inside text-sm space-y-2 text-left">
              {bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
