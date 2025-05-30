import React from "react";
import ProjectItem from "./ProjectItem";
import Boggle from "../images/Boggle.png";
import Dragon from "../images/dragonPBR.png";
import CatBurglar from "../images/catStartScreen.png";
import Mangrove from "../images/Mangrove.png";
import FinalSphere from "../images/SphereRender.png";

var splash =
  "https://images.unsplash.com/photo-1633998860517-29b9ada37476?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="p-10 text-4xl font-bold text-center text-black">
        Projects
      </h1>

      <div className="grid sm:grid-cols-1 gap-12">
        <ProjectItem
          img={Mangrove}
          title="Mangrove"
          paragraph="A group senior design capstone project that is a continuation from 3 previous teams. 
                         Normal soundscape analysis tools are either costly or not as easily accessible for beginners. Mangrove 
                         aims to change that by being open source and easier to use. The software allows users to analzyse their own 
                         audio with mangroves own analystical algothrims, and can then save notations that are easily exportable for sharing. 
                         Uses a LEMP tech stack and my group focused on adding some features and making mangrove more polished."
        />

        <ProjectItem
          img={CatBurglar}
          title="Cat Burglar"
          site="https://observablehq.com/d/9b9719f9033b32c4"
          paragraph="Group project in my computer graphics class where we created a temple run type of game
                         of a cat avoiding obstacles. We applied everything learned in the year and applied it to this project"
          buttonInfo="click here"
        />

        <ProjectItem
          img={Dragon}
          title="Collection of 3D graphics projects"
          site="https://observablehq.com/collection/@jaedenhuxtable/organize-assignments"
          paragraph="During my intro to computer graphics class I worked on assignments and projects mainly in javascript
                         and glsl coding languages. I learned topics and techniques like object rendering, matrix transformations,
                         camera calculations, lighting and calulating how objects look based on material, mapping textures to objects,
                         and real time rendering of accuarte shadows through shadow mapping."
          buttonInfo="Click Here"
        />

        <ProjectItem
          img={FinalSphere}
          title="Webgl Ray Tracer"
          site="https://raytracingtnw.onrender.com"
          paragraph="I dicided to follow the ray tracing in one weekend guide, but with a twist. I opted to attempt it in Webgl
                         with reactjs vs. the original implementation of using C++. I wanted to complete a raytracer in webgl cause my idea was
                         that by using Webgl which runs on a computer gpu would allow for faster rendering compared to being on the cpu and can 
                         allow for possible scene manipulation in real time."
          buttonInfo="Click Here"
        />

        <ProjectItem
          img={Boggle}
          title="Boggle"
          paragraph="In a class focused with exposing me to different markup and scripting languages.
                         Was tasked to design a boggle site but each time with different languages. 
                         I completed it in JavaScript with jquery, PHP, and ReactJS"
        />
      </div>
    </div>
  );
};

export default Projects;
