"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { LinkPreviewComponent } from "./linkpreview";

export function WavyBackgroundComponent() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="mt-28 text-3xl md:text-5xl lg:text-8xl text-white font-bold inter-var text-center">
        Mohamed Arafath
      </p>
    <LinkPreviewComponent />
    </WavyBackground>
  );
}
