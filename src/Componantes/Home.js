import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import MyPorfolio from './MyPorfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyPorfolio></MyPorfolio>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;