import React from 'react';

const Aboutme = () => {
    return (
        <div className="bg-white">
            <h2 className='font-bold py-8 text-4xl text-center'>About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
                <div>
                    <h3 className='p-8 text-xl'>MY STORY</h3>
                </div>
                <div>
                    <h3 className='p-8 text-xl'>MY SKILLS</h3>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;