import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {IoSchoolOutline} from 'react-icons/io5'
import { BsFilePerson } from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] bg-white visible md:hidden'/>

      {
        nav ? (
           <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration'>
              <AiOutlineHome size={20} />
              <span className='pl-4'>Home</span>
            </a>

            <a onClick={handleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration'>
              <BsFilePerson size={20} />
              <span className='pl-4'>About</span>
            </a>

            <a onClick={handleNav} href="#education" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration'>
              <IoSchoolOutline size={20} />
              <span className='pl-4'>Education</span>
            </a>

            <a onClick={handleNav} href="#Projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration'>
              <GrProjects size={20} />
              <span className='pl-4'>Projects</span>
            </a>

            <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration'>
              <AiOutlineMail size={20} />
              <span className='pl-4'>Contact</span>
            </a>
           </div>
        ) : (
            <div></div>
        )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20} />
            </a>

          <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsFilePerson size={20} />
          </a>

            <a href="#education" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <IoSchoolOutline size={20} />
            </a>

            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <GrProjects size={20} />
            </a>

            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
    </div>
  );
};

export default Sidenav;