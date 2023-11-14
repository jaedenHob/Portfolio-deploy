import React from 'react'

const EducationItem = ({course, details}) => {
  return (

    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-1 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-100 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='text-lg font-semibold text-black'>{course}</span>
            </p>
            <p className='my-1 text-base font-normal text-stone-500'>{details}</p>
        </li>
    </ol>
  );
};

export default EducationItem;