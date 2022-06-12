import React from 'react';
import tailwind from '../Image/tailwind.png'
import router from '../Image/router.png'
import mongo from '../Image/mongo.png'
import express from '../Image/express-logo.png'

const Aboutme = () => {
    return (
        <div className="bg-white py-8">
            <h2 className='font-bold py-4 text-4xl text-center'>About Me</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 container mx-auto'>
                <div className='px-8'>
                    <h3 className='font-bold text-xl text-right mb-6'>MY STORY</h3>
                    <p className='text-xl text-right'>Hi, I am a MERN stack Developer. I am an expert in Rect JS, Express JS, Mongo DB, javascript, Node js, css3, responsiveness and other essential tools. I love to Develop interesting and unique design. I also like to challange myself to learn new things And I crave for new experiences And Challanges. Thank you for visiting my portfolio.</p>
                    
                </div>
                <div>
                    <h3 className='font-bold text-xl mb-6'>MY SKILLS</h3>
                    <div className='flex justify-center flex-wrap'>
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/888/888859.png" alt="" />
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="" />
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="" />
                        <img className='w-2/12 m-2' src={tailwind} alt="" />
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="" />
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="" />
                        <img className='w-2/12 m-2' src={router} alt="" />
                        <img className='w-2/12 m-2' src={mongo} alt="" />
                        <img className='w-2/12 m-2' src={express} alt="" />
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
                        <img className='w-2/12 m-2' src="https://cdn-icons-png.flaticon.com/512/873/873120.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;