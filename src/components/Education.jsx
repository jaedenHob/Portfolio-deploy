import React from 'react'
import Pegasus from '../images/UcfPegasusCropped.png'
import EducationItem from './EducationItem'
import Resume from '/resume.pdf'

const data = [
  {
    course:'Computer Science 1',
    details:'Problem solving, order analysis and notation, abstract data types, and recursion.'
  },
  {
    course: 'Computer Science 2',
    details: 'Algorithm analysis for trees, lists, set, graph models, and their practical applications.'
  },
  {
    course: 'Intro to Discrete Structures',
    details: 'Logic, sets, relations, boolean, finite-state machines, and turing machines.'
  },
  {
    course: 'Discrete Structures 2',
    details: 'Focus on computation theory and properties of grammars and automata.'
  },
  {
    course: 'Topics in Cybersecurity',
    details: 'Emphasis on system penetration methods and strategies for network defense.'
  },
  {
    course: 'Systems Software',
    details: 'Designed and development of assemblers. Built a compiler'
  },
  {
    course: 'Web Based info Technology',
    details: 'Exposure to markup languages, scripting languages, and planning techniques for web services.'
  },
  {
    course: 'Computer Graphics',
    details: 'math for computer graphics, using shaders, and designing a game as a project.'
  },
  {
    course: 'Analysis of Computer Communication Networks',
    details: 'learning network design that involves using layering.'
  },
  {
    course: 'Object Oriented Programming',
    details: 'Object oriented concepts such as: classes, objects, methods, inheritance, polymorphism. Using eclipse IDE and java.'
  },
  {
    course: 'Processes of Object Oriented Programming',
    details: 'Concepts, processes, and principles for developing large software systems. Team projects using LAMP and MERN tech stack.'
  },
  {
    course: 'Senior Design 1',
    details: 'Large scale team project to demonstrate knowledge of computer Science and apply it to real problems. (Research focus)'
  },
  {
    course: 'Senior Design 2',
    details: 'Same large scale project, but this time applieing tecnologies and strategies formed from SD1.'
  },
];
const Education = () => {
  return (
    <div>
      <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 pt-4'>
        <h1 className='flex justify-center mt-8 text-base font-bold text-black'>Resume</h1>

        <h2 className='pt-5 mx-40 text-xl font-bold text-black'>Education</h2>

        <hr className='mx-40 max-w-[1040px] h-px bg-gray-200 border-0 md:my-5 dark:bg-gray-300' />

        <div className='mx-40 pb-5 flex items-center justify-between'>
          <a className='inline-block' href='https://ucf.edu' target='_blank'>
            <img className='rounded-full object-none hover:scale-150 ease-in duration-300' src={Pegasus} alt='UCF pegasus logo' />
          </a>

          <div className='columns-1 text-base font-bold text-black'>
            <div>University of Central Florida</div>

            <div>Computer Science, B.S.</div>
          </div>

          <div className='columns-1 text-base  text-black'>
            <div>2018 - 2023</div>

            <div>Orlando, FL</div>
          </div>

        </div>
      

        <h2 className='pb-5 mx-40 text-3xl font-bold text-black'>Relevant Coursework:</h2>

        <div className='mx-40 pl-5'>
          {data.map((item, index) => (
            <EducationItem
              key={index}
              course={item.course}
              details={item.details} />
          ))}
        </div>

      </div>

      <div className='max-w-[1040px] m-auto md:pl-20 p-4 pt-4'>
        <a href={Resume} download='Jaeden_Hobstable_Resume.pdf'className='flex justify-center mt-8 text-base font-bold text-blue-700 underline'>Download my resume as a .pdf</a>
      </div>

    </div>
    
  );
};

export default Education;