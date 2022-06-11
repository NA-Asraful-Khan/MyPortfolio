import React from 'react';
import image1 from '../../Image/Port2.png'
import image2 from '../../Image/Port2.1.png'
import image3 from '../../Image/Port2.2.png'
import image4 from '../../Image/Port2.3.png'

const AutoMobile_Inventories = () => {
    return (
        <div className='my-8'>
            <h2 className='font-bold text-5xl text-center '>AUTOMOBILE INVENTORIES</h2>
            <p className='py-8 text-4xl text-center'>FullStack WebSite</p>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='px-16'>
                    <h2 className='font-bold text-2xl text-center mb-4'>Project Details</h2>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Technology:</span> React,React Router,Express JS, Node js, MongoDB, Firebase Authentication</p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Duration:</span> May-2022 to May-2022</p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>About Project:</span> This is a Inventory Management Website. Here a user can check his stock of the product. Update the quantity of the product and also Decrease the Quantity of the product if any product delivered. User can also delete the product if any product is out of stock.
                    </p>
                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Live Link :</span> <a href="https://inventory-7521f.web.app/" className='text-red-700' target="_blank" rel="noopener noreferrer">AUTOMOBILE INVENTORIES</a></p>

                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Github Client Side Link :</span> <a href="https://github.com/NA-Asraful-Khan/Inventories-Client" className='text-red-700' target="_blank" rel="noopener noreferrer">AUTOMOBILE INVENTORIES</a></p>

                    <p className='font-medium text-lg tracking-wider mb-4'><span className='font-bold'>Github Server Side Link :</span> <a href="https://github.com/NA-Asraful-Khan/Inventories-Server" className='text-red-700' target="_blank" rel="noopener noreferrer">AUTOMOBILE INVENTORIES</a></p>
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

export default AutoMobile_Inventories;