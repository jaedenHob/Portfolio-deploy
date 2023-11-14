import React from "react";
import Content from "./AboutItem";
import Robot from '../images/MazeRobot.png'
import NavalBoat from '../images/boatFloat.png'
import Tech from '../images/technologies.png'

const imagesAndText = [
    {
        imageUrl: Robot,
        caption: 'Maze robot that I worked on with a group building and programming',
        paragraph: 'I\'m originally from south Florida. At the start of my journey I \
        went from pursing medicine to engineering due to my curiosity in technology. \
        Working on projects as engineer was my introduction to coding, and I found \
        solving complex programming problems was more interesting than soldering and wiring.'    
    },
    {
        imageUrl: NavalBoat,
        caption: 'Another project where my group built and programmed a boat that navigated our schools pond',
        paragraph: 'When it comes to work my principles is that code must be clean while remaing efficient. \
        I also value cooperation and find myself more likely to thrive in cooperative environments where I can learn from others.'
    },
    {
        imageUrl: Tech,
        caption: 'Technologies and languages I have used first hand',
        paragraph: 'My education gave me a strong foundation in full-stack development as I am proficient in both frontend and backend technologies. \
        Languages like JavaScript, HTML, CSS for frontend, and frameworks like nodejs, laravel, and express for backend. I also have an understanding \
        of databases, version control with GIT, and to work / test APIs.'
    },   
];


const About = () => {
  return (
      <div className='max-w-[950px] m-auto md:pl-20 p-4 py-16'>

        <div id='about' className='py-4 text-4xl font-bold text-center text-black'>
            About Me
        </div>

          <div className="container m-auto py-8 p-12">
              <Content sections={imagesAndText} />
          </div>

          <h2 className='flex pt-5 sm:text-1xl text-lg font-normal text-stone-500 '> 
            When I am away from the keyboard, I'm usually spending my free time either weight training or going rock climbing. 
            Other times when I don't feel like doing physical activity I'll unwind through gaming.
        </h2>
    </div>    
  )
}

export default About;
