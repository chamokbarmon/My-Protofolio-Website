import React from 'react';

const Details2 = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/vzJhL3Z/Screenshot-50.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Gym Website</h1>
                    <p className="mb-5 text-2xl">Discover gym websites built by the webflow community ; FITNESS | GYM. 65. 233. Caleb Williams</p>
                    <div className='flex justify-center gap-4'>
                    <button className="btn btn-primary m-end"><a target='blank' href="https://github.com/chamokbarmon/gym-website">Code Link </a></button>
                    <button className="btn btn-primary m-end "><a target='blank' href="https://chamokbarmon.github.io/gym-website/">live View </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details2;