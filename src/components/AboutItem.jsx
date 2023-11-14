import React from 'react';

const Content = ({ sections }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 ">
            {sections.map((section, index) => (
                <div
                    key={index}
                    className='order-1 flex flex-col items-center'
                >
                    <div className="flex items-center">
                        {index % 2 == 0 ? (
                            <>
                                <div className='grid sm:grid-cols-2 gap-20 items-center'>
                                    <div>
                                        <img
                                            src={section.imageUrl}
                                            alt={section.caption}
                                            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400"
                                        />
                                        <p className='pt-3 text-center'>{section.caption}</p>
                                    </div>
                                    <p className='flex sm:text-1xl text-lg font-normal text-stone-500 text-center'>{section.paragraph}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='grid sm:grid-cols-2 gap-12 items-center'>
                                        <p className='flex sm:text-1xl text-lg font-normal text-stone-500 text-center'>{section.paragraph}</p>
                                    <div>
                                        <img
                                        src={section.imageUrl}
                                        alt={section.caption}
                                        className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400"
                                        />
                                        <p className='pt-3 text-center'>{section.caption}</p>
                                    </div>
                                </div>
                                
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Content;
