import React from 'react';

import image1 from '../../Image/Port4.png'
import image2 from '../../Image/Port4.1.png'
import image3 from '../../Image/Port4.2.png'
import image4 from '../../Image/Port4.3.png'

const My_Photograpy = () => {
    return (
        <div className='my-8'>
            <h2 className='font-bold text-5xl text-center '>My Photograpy</h2>
            <p className='py-8 text-4xl text-center'>FullStack WebSite</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='px-16'>
                    <h2 className='font-bold text-2xl text-center mb-4'>Project Details</h2>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Technology:</span> React,React Router,Firebase Authentication</p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Duration:</span> April-2022 to April-2022</p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>About Project:</span> I use React Routing. That was fun to use. I create 404 route for unavailable route. I use Custome Hooks for reuse the same type of work again. I use Rechart for dashboard
                    </p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Live Link :</span> <a href="https://photoprahy-routing.netlify.app/" className='text-red-700' target="_blank" rel="noopener noreferrer">My Photograpy</a></p>

                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Github Code Link :</span> <a href="https://github.com/NA-Asraful-Khan/My-Photograpy-authenticated" className='text-red-700' target="_blank" rel="noopener noreferrer">My Photograpy</a></p>
                </div>
                <div class="h-96 w-full  carousel carousel-vertical rounded-box">
                    <div class="carousel-item">
                        <img src={image1} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={image2} alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={image3} alt="" />
                    </div>

                    <div class="carousel-item">
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default My_Photograpy;