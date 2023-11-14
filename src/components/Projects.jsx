import React from 'react'
import ProjectItem from './ProjectItem';
import Boggle from '../images/Boggle.png'
import Dragon from '../images/dragonPBR.png'
import CatBurglar from '../images/catStartScreen.png'
import Mangrove from '../images/Mangrove.png'

var splash = 'https://images.unsplash.com/photo-1633998860517-29b9ada37476?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='p-10 text-4xl font-bold text-center text-black'>Projects</h1>

          <div className='grid sm:grid-cols-1 gap-12'>
            <ProjectItem img={Mangrove} 
                         title='Mangrove' 
                         paragraph="A group senior design capstone project that is a continuation from 3 previous teams. 
                         Normal soundscape analysis tools are either costly or not as easily accessible for beginners. Mangrove 
                         aims to change that by being open source and easier to use. The software allows users to analzyse their own 
                         audio with mangroves own analystical algothrims, and can then save notations that are easily exportable for sharing. 
                         Uses a LEMP tech stack and my group focused on adding some features and making mangrove more polished."  
                         />

            <ProjectItem img={CatBurglar} 
                         title='Cat Burglar' 
                         site='https://observablehq.com/d/9b9719f9033b32c4' 
                         paragraph="Group project in my computer graphics class where we created a temple run type of game
                         of a cat avoiding obstacles. We applied everything learned in the year and applied it to this project"
                         buttonInfo='click here'
                         />

            <ProjectItem img={Dragon} title='Reflective objects' 
                         site='https://observablehq.com/d/9b24a78f919a6b1a'
                         paragraph="Using the microfacet BRDF model which is a function that calcuates the scattering characteristic 
                         of the surface of an object's material. I can render objects and create reflections that follows how light 
                         reflects on a certain metal type and roughness of the material."
                         
                         buttonInfo='Click Here'
                         />

            <ProjectItem img={Boggle} 
                         title='Boggle' 
                         buttonInfo='In a class focused with exposing me to different markup and scripting languages.
                         Was tasked to design a boggle site but each time with different languages. 
                         I completed it in JavaScript, PHP, and ReactJS'
                        />
          </div>
          
    </div>
  )
}

export default Projects;
