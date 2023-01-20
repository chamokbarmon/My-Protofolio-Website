import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../ContactUs/Contact.css';
import { toast } from 'react-toastify';

const ContactUS = () => {
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2zx4yj', 'template_kjyfd7e', form.current, 'uTi6tHrCWh1v5tb3P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      toast('Your email sucessfully');
  };
    return (
     <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
       <p className='text-center text-white mt-5 font-bold p-6 text-4xl'>Contact us</p>
      <div className="hero min-h-screen   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://opnco.net/wp-content/uploads/2021/09/Contact-Us-banner_1586952394-1.jpg" alt='' className="max-w-sm width h-full rounded-lg shadow-2xl" />
        <div className='width1 '>
        <form action="" ref={form} className='w-full text-white   mt-10 flex justify-center align-middle' onSubmit={sendEmail}> 
    <div className="card flex-shrink-0 text-slate-700   w-full max-w-sm shadow-2xl ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className=" text-white">Name</span>
          </label>
          <input type="text" name='user_name' placeholder="Enter your name :" className="input  bg-slate-400 text-white input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className=" text-white">Email</span>
          </label>
          <input type="email" name="user_email" placeholder="Enter Your Email :" className="input bg-slate-400 text-white input-bordered" />
        
          <textarea name="message" placeholder='Enter your message :' id="" cols="30" rows="6" className='border rounded bg-slate-400 text-black m-2'></textarea>
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"><input type="submit" value="Send" /></button>
        </div>
      </div>
    </div>
    </form>
        </div>
      </div>
    </div>
     </div>
       
    
     
 
     
    );
   
};

export default ContactUS;