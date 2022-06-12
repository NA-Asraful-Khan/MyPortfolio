import React from 'react';
import profilePicture from '../Image/Profile.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-white-grey">
                <div className="hero-content pb-0 flex-col lg:flex-row-reverse">
                    <img className='w-6/12' src={profilePicture} alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Nur - A - Asraful Khan</h1>
                        <p className=" tracking-widest text-2xl py-6">I am a Junior Web Developer</p>
                        <a className='btn btn-primary' href="https://github.com/NA-Asraful-Khan/MyPortfolio/raw/main/src/Image/Nur-A-Asraful-Khan.pdf" target="_blank">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;