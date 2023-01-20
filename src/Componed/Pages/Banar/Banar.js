import React from 'react';
import picture from '../picture/picture.jpg'
import '../Banar/Banar.css'
import Typewriter from 'typewriter-effect';


const Banar = () => {
    return (
       <div >
         <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-50">
            <div className="hero-content w-50 lg:flex-row">
                <img src={picture} alt='' className="height max-w-sm  rounded-lg shadow-2xl" />
                <div className='w-50'>
                    <h1 className="text-5xl font-bold text-dark">Chamok Barmon</h1>
                   <div className='mt-5 mb-5 font-bold text-white text-2xl'>
                   <Typewriter  
                      options={{
                        strings: [ 'MERN Stack Developer', 'Web Developer','Font-end-Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                   </div>
                    <button className="btn btn-primary">Contact us </button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Banar;