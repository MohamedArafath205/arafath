"use client";
import React from "react";
import { SparklesPreview } from "../../components/heroPage";
import Projects from "../../components/projects";
import { TracingBeam } from "../../components/ui/tracing-beam";

export default function Home() {
  return (
    <div className="w-full">
      <SparklesPreview />
      <Projects />
    </div>
  );
}
