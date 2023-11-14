import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa6'
import {SiIndeed} from 'react-icons/si'
import Selfie from '../images/selfie(1).png'


const Main = () => {
  return (

    <div id='main' className='md:flex'>

        <img className='w-full h-screen object-cover object-left scale-x-[1] relative' 
        src='https://images.unsplash.com/photo-1698920717701-c3c55ce9bc58?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
         alt ='rendered laptop image'
        />

        <div className='right-0 h-screen absolute top-0 left-0'> 

        <div className='max-w-[1000px] m-auto h-full w-full flex  lg:items-center items-center py-2'>
            
          <div className='text-center sm:text-left'>
            <h1 className='sm:text-5xl text-4xl font-bold text-white'>Hello World!</h1>
            <h1 className='sm:text-5xl text-4xl font-bold text-white'>My name is Jaeden Hobstable</h1>

            <h2 className='flex sm:text-1xl text-xl pt-4 text-white'>
              I'm a computer science graduate that is eager to build software applications. I have an interest in full stack development and find joy in 
              crafting elegant solutions to problems and constantly seeking opportunties to learn and grow as a software engineer.
            </h2>

            <div className='flex justify-between pt-6 max-w-[50px] w-full'>
              <a href="https://www.linkedin.com/in/jaeden-hobstable/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className='cursor-pointer' size={20} color='white' />
              </a>
              <a href="https://profile.indeed.com/p/jaedenh-2qt0qcr" target="_blank" rel="noopener noreferrer">
                <SiIndeed className='cursor-pointer' size={20} color='white' />
              </a>
            </div>

          </div>

          <img className='pl-4 h-78 w-96  rounded-full hidden md:block' src={Selfie} alt='Jaeden image' />
        
        </div>
          

      </div>

    </div>
    
  )
}

export default Main;