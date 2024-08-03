"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWordComponent } from "./fipWords";
import { LinkPreviewComponent } from "./linkpreview";

export function SparklesPreview() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex items-center flex-col">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative">
          Mohamed Arafath
          <LinkPreviewComponent />
        </h1>
      </div>
      <div className="mt-32">
        <FlipWordComponent />
      </div>
    </div>
  );
}
