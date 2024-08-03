"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";

export function LinkPreviewComponent() {
  return (
    <div className="flex justify-center items-center flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-300 text-xl md:text-3xl max-w-3xl mx-auto mb-10 realtive z-2 text-center">
        <p className="mt-4">
          Software Developer Intern{" "}
          <LinkPreview
            url="https://sic.mic.gov.in"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            @Ministry of Education
          </LinkPreview>{" "}
        </p>
        <p className="mt-4">
          Technical Team Lead{" "}
          <LinkPreview
            url="https://gdsc.community.dev/srm-institute-of-science-and-technology-ramapuram-chennai-india/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            @GDSC SRM Ramapuram
          </LinkPreview>{" "}
        </p>
        <p className="mt-4">
          B.Tech CSE AIML{" "}
          <LinkPreview
            url="https://srmrmp.edu.in/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            @SRM Ramapuram
          </LinkPreview>{" "}
        </p>
      </p>
    </div>
  );
}
