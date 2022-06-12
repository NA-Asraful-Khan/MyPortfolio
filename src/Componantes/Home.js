import React from 'react';
import Aboutme from './Aboutme';
import Banner from './Banner';
import ContactUs from './ContactUs';
import MyPorfolio from './MyPorfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <h2 className='font-bold py-8 text-4xl text-center bg-white-grey'>My Portfolio</h2>
            <MyPorfolio></MyPorfolio>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;