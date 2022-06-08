import React from 'react';
import Aboutme from './Aboutme';
import Banner from './Banner';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Aboutme></Aboutme>
        </div>
    );
};

export default Home;