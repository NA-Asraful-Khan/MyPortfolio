import React from 'react';
import image1 from '../../Image/Port1.png'
import image2 from '../../Image/Port1.2.png'
import image3 from '../../Image/Port1.3.png'
import image4 from '../../Image/Port1.4.png'
import image5 from '../../Image/Port1.5.png'
import image6 from '../../Image/Port1.6.png'

const Automotive_Parts_Manufacturing = () => {
    return (
        <div className='my-8'>
            <h2 className='font-bold text-5xl text-center '>AUTOMOTIVE PARTS MANUFACTURING</h2>
            <p className='py-8 text-4xl text-center'>FullStack WebSite</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='px-16'>
                    <h2 className='font-bold text-2xl text-center mb-4'>Project Details</h2>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Technology:</span> React,React Router,Express JS, Node js, MongoDB, Firebase Authentication</p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Duration:</span> May-2022 to May-2022</p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>About Project:</span> This is a website for a parts manufacturing company where a customer can place the order and pay the bill  dashboard where an admin can add product, delete product, make someone admin, canceling order etc.
                    </p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Live Link :</span> <a href="https://tool-e56ed.web.app/" className='text-red-700' target="_blank" rel="noopener noreferrer">AUTOMOTIVE PARTS MANUFACTURING</a></p>

                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Github Client Side Link :</span> <a href="https://github.com/NA-Asraful-Khan/Automotive-Client" className='text-red-700' target="_blank" rel="noopener noreferrer">AUTOMOTIVE PARTS MANUFACTURING</a></p>

                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Github Server Side Link :</span> <a href="https://github.com/NA-Asraful-Khan/Automotive-Server" className='text-red-700' target="_blank" rel="noopener noreferrer">AUTOMOTIVE PARTS MANUFACTURING</a></p>
                </div>
                <div className="h-96 w-full  carousel carousel-vertical rounded-box">
                    <div className="carousel-item">
                        <img src={image1} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} alt="" />
                    </div>

                    <div className="carousel-item">
                        <img src={image4} alt="" />
                    </div>

                    <div className="carousel-item">
                        <img src={image5} alt="" />
                    </div>

                    <div className="carousel-item">
                        <img src={image6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Automotive_Parts_Manufacturing;