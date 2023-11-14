import React from 'react'

const ProjectItem = ({img, title, site, buttonInfo, paragraph}) => {
  return (
      <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-yellow-400'>
          <img src={img} alt={title} className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
    
            {site ? (
              <>
                <p className='text-center p-3 rounded-lg text-gray-700 font-bold cursor-pointer text-lg'>{paragraph}</p>
                
                <a href={site} target='_blank'>
                  <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>{buttonInfo}</p>
                </a>
              </>
            ) : (
              <>
                <p className='text-center p-3 rounded-lg text-gray-700 font-bold cursor-pointer text-lg'>{paragraph}</p>
              </>
            )}
        </div>
    </div>
  );
};

export default ProjectItem;
