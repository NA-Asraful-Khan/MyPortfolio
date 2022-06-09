import React from 'react';
import profilePicture from '../Image/Profile.png'

const Banner = () => {
    return (
        <div>
            <div class="hero bg-white-grey">
                <div class="hero-content pb-0 flex-col lg:flex-row-reverse">
                    <img className='w-6/12' src={profilePicture} alt="" />
                    <div>
                        <h1 class="text-5xl font-bold">Nur - A - Asraful Khan</h1>
                        <p class=" tracking-widest text-2xl py-6">I am a Junior Web Developer</p>
                        <a className='btn btn-primary' href="../Image/Nur-A-Asraful-Khan.pdf" target="_blank" download>My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;