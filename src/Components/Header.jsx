import React from 'react'
// import './Header.css';
import { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Header = () => {
  const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#3187f7] '>
      <div className='max-w-[1240px] py-[12px] items-center flex justify-between  mx-auto'>
      <div className='text-5xl font-bold'>TechHelp</div>
     {
       toggle ?
       <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
       :
       <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
       }
      {/* <AiOutlineMenu className='text-white text-2xl md:hidden block '/>
       <AiOutlineClose className='text-white text-2xl md:hidden block '/> */}
     <ul className='hidden md:flex text-white gap-5'>
      
      <li className='p-5 font-bold'><Link to="/">Home</Link></li>
      <li className='p-5 font-bold'><Link to="/About">About</Link></li>
      <li className='p-5 font-bold'><Link to="/Services">Services</Link></li>
      <li className='p-5 font-bold'><Link to="/ContactUs">ContactUs</Link></li>
      
     </ul>
     {/* Responsive menu */}

     <ul className={`duration-400 md:hidden w-full h-[35%] text-white fixed bg-[#3187f7] top-[71px]   
     ${toggle ? 'left-[0]':'left-[-100%]'}
     `} >

      <li onClick={()=>setToggle(!toggle)} className='p-5'><Link to="/">Home</Link></li>
      <li onClick={()=>setToggle(!toggle)} className='p-5'><Link to="/About">About</Link></li>
      <li onClick={()=>setToggle(!toggle)} className='p-5'><Link to="/Services">Services</Link></li>
      <li onClick={()=>setToggle(!toggle)} className='p-5'><Link to="/ContactUs">ContactUs</Link></li>
      
     </ul>
    </div>
      </div>
   
  )
}

export default Header
