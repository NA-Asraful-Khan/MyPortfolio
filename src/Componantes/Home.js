import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import MyPorfolio from './MyPorfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='font-bold py-8 text-4xl text-center'>My Portfolio</h2>
            <MyPorfolio></MyPorfolio>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;