"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FlipWordComponent } from "./fipWords";
import { LinkPreviewComponent } from "./linkpreview";

export function SparklesPreview() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
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
        </h1>
        <FlipWordComponent />
        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Shimmer
        </button> */}
        {/* <LinkPreviewComponent /> */}
      </div>
    </div>
  );
}
