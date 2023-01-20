import React from 'react';
import '../About us/Aboutus.css'
import Typewriter from 'typewriter-effect';

const AboutSelf = () => {
    return (
       <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
         <p className='text-center text-white  text-4xl mt-5 p-6 font-bold'>About us </p>
        <div className="hero min-h-screen">
           
            <div className="hero-content flex justify-around flex-col lg:flex-row-reverse">
            <div className='text-white text-4md ms-5 width'>
            <Typewriter  
                      options={{
                        strings: [ 'Chamok Bamron'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
            <Typewriter  
                      options={{
                        strings: [ 'Programmer & Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <p>Address: Gobindagonj, Gaibandha</p>
                    <p>Dhaka , Bangladesh</p>
                    <p>My Hobby : love to reading Books, board games. 
                        <br />
                        Photography. 
                        Cooking. 
                        Sports and Exercise. 
                        Music.</p>
                </div>
                <img src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" className="max-w-sm mb-40 rounded-lg shadow-2xl" alt='' />
               
            </div>
        </div>
       </div>
    );
};

export default AboutSelf;