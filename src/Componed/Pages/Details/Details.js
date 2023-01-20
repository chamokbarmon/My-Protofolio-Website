import React from 'react';


const Details = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/fpMrPSM/Screenshot-51.png")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Car Website</h1>
                    <p className="mb-5 text-2xl">Car market Latest Breaking News, Pictures, Videos, and Special Reports from The Economic Times</p>
                    <div className='flex justify-center gap-4'>
                    <button className="btn btn-primary m-end"><a target='blank' href="https://github.com/chamokbarmon/Car-market-website">Code Link </a></button>
                    <button className="btn btn-primary m-end "><a target='blank' href="https://user-car-project.web.app/">live View </a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;