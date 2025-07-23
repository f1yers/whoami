'use client';

import { useState } from "react";
import { experiences } from "@/data/experience";
import RoleItem from "./RoleItem";

export default function RoleTimeline() {

  const defaultIndexes = experiences
    .map((role, idx) => role.defaultOpen ? idx : null)
    .filter((idx): idx is number => idx !== null);

  // [state, updater]
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultIndexes);

  console.log("Default open indexes:", openIndexes);

  return (
    <div className="space-y-4">
      {experiences.map((role, idx) => (
        <RoleItem
          key={idx}
          isOpen={openIndexes.includes(idx)}
          onToggle={() => {
            setOpenIndexes(prev => 
              prev.includes(idx) 
                ? prev.filter(i => i !== idx) // collapse if open
                : [...prev, idx]              // expand if closed
            );
          }}
          {...role} // spread operator passing all role properties
        />
      ))}
    </div>
  );
}
