import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordComponent() {
  const words = ["Web apps", "Machine Learning", "Data Science", "Flutter", "Networking", "Dev Ops"];

  return (
    <div className="mt-5">
      <div className="md:text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I&apos;m good at <FlipWords words={words} />
      </div>
    </div>
  );
}
