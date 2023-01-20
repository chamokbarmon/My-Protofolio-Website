import React from 'react';

const Details3 = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/MPRjhjN/Screenshot-1.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">WaterFlow Website</h1>
                    <p className="mb-5 text-2xl">The site aims to give an overview only of conditions across the whole of the ... System view provides a simple overview of water flow rates</p>
                    <div className='flex justify-center gap-4'>
                    <button className="btn btn-primary m-end"><a target='blank' href="https://github.com/chamokbarmon/Responsive-website">Code Link </a></button>
                    <button className="btn btn-primary m-end "><a target='blank' href="https://chamokbarmon.github.io/Responsive-website/">live View </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details3;