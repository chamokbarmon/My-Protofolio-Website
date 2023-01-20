import React from 'react';
import '../../Pages/Progressbar/Progressbar.css';
import coding from '../../Pages/picture/pixel (4).jpg';

const Progressbar = () => {
    return (
        <div className='mt-5'>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={coding} className="max-w-sm  image max-h-full rounded-lg shadow-2xl" alt='' />
                <div>
                    <div className="skill mb-20">
                        <div>
                        <h2>Html</h2>
                        <div className="progress-ber">
                            <div className="html"><span>80%</span></div>
                        </div>
                        </div>
                       <div className='mb-10'>
                       <h2>Css</h2>
                        <div className="progress-ber">
                            <div className="css"><span>75%</span></div>
                        </div>
                       </div>
                        <div>
                        <h2>Javscript</h2>
                        <div className="progress-ber mb-5">
                            <div className="javascript"><span>65%</span></div>
                        </div>
                        </div>
                        <div>
                        <h2>bootstrap</h2>
                        <div className="progress-ber mb-5">
                            <div className="bootstrap"><span>55%</span></div>
                        </div>
                        </div>
                        <div>
                        <h2>Tailwind</h2>
                        <div className="progress-ber mb-5">
                            <div className="php"><span>50%</span></div>
                        </div>
                        </div>
                        <div>
                        <h2>React</h2>
                        <div className="progress-ber mb-5">
                            <div className="react"><span>85%</span></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Progressbar;