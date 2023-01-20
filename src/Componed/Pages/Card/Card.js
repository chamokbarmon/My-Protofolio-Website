import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Pages/picture/pixel (1).jpg'
import img2 from '../../Pages/picture/pixel (2).jpg'
import img3 from '../../Pages/picture/pixel (3).jpg'

const Card = () => {
    return (
       <div className='mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-20'>
             <p className='text-4xl text-center font-bold text-white'>Projects</p>
        <div className='flex lg:cols-span-3 md:cols-span-2 gap-10 justify-center align-middle mt-20'>
            
            <div className="card w-96 bg-base-100 shadow-xl image-full">
               <figure><img src={img1} alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title text-4xl"> Car Shop Market </h2>
                   <p>Car market Latest Breaking News, Pictures, Videos, and Special Reports from The Economic Times</p>
                   <div className="card-actions justify-end">
                       <button className="btn btn-primary"><Link to='/details1'>View Details</Link>  </button>
                   </div>
               </div>
           </div>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
               <figure><img src={img2} alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title text-4xl">Gym Website </h2>
                   <p>Discover gym websites built by the webflow community ; FITNESS | GYM. 65. 233. Caleb Williams</p>
                   <div className="card-actions justify-end">
                   <button className="btn btn-primary"><Link to='/details2'>View Details</Link></button>
                   </div>
               </div>
           </div>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
               <figure><img src={img3} alt="Shoes" /></figure>
               <div className="card-body">
                   <h2 className="card-title text-4xl">WaterFlow Website </h2>
                   <p>The site aims to give an overview only of conditions across the whole of the ... System view provides a simple overview of water flow rates</p>
                   <div className="card-actions justify-end">
                   <button className="btn btn-primary"><Link to='/details3'>View Details</Link></button>
                   </div>
               </div>
           </div>
          </div>
       </div>
    );
};

export default Card;