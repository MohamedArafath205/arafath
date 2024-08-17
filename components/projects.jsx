import React from "react";
import { EvervaultCardDemo } from "./evervaultcard";
import { TracingBeam } from "./ui/tracing-beam";

const Projects = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-center mt-10 text-6xl">Projects</h1>
      <div className="mt-20 px-6 md:px-12 lg:px-24 xl:px-48">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-10 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <EvervaultCardDemo
            hoverText="hover"
            Description="Testing a new card"
            linkText="testing"
            link="https://youtube.com"
          />
          <EvervaultCardDemo
            hoverText="hover"
            Description="Testing a new card"
            linkText="testing"
            link="https://youtube.com"
          />
          <EvervaultCardDemo
            hoverText="hover"
            Description="Testing a new card"
            linkText="testing"
            link="https://youtube.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
