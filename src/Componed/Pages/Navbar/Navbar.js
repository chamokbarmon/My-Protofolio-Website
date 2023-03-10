import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../picture/picture.jpg'


const Navbar = () => {
    const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Blog</Link></li>
    <li><Link to='/' >Sign Out</Link></li>
    <li><Link to='/'>login</Link></li>
 
 </>
    return (

<div className="navbar  bg-slate-700 text-white font-bold p-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact text-white dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           {menuItems}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">Chamok Barmon </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {menuItems}
    </ul>
  </div>
 
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={picture} alt='' />
        </div>
   </label>
   <a target='blank' href="https://drive.google.com/file/d/1nAjs_YvIixvKcUENgiNv953tK0eD327i/view?usp=sharing" className='btn btn-primary'>Resume Download</a>
  </div>
 
</div>
    );
    };

export default Navbar;