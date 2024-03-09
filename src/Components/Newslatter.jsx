import React from 'react'
import { Link } from 'react-router-dom'

const Newslatter = () => {
  return (
    <div className='bg-[#3187f7] '>
      <div className='max-w[500px] mx-auto md:flex justify-between py-[20px] px-5 items-center'>
        <div className='m-2 max-w-[70%] text-center'>
        <h1 className='text-[20px] md:text-[20px] font-bold text-white'>At TechHelp, our mission is simple yet profound: to empower individuals of all ages and backgrounds with the knowledge and skills they need to thrive in a rapidly changing world. We believe that education is the key to personal and societal advancement, and we are dedicated to making learning accessible to everyone.</h1>

         <span className='text-white'>Sign up to our newslatter and stay up to date.
         </span>
        </div>
        <div className='m-2'>
          <input type="text" className='md:w-full rounded mb-2 mr-2 text-slate-600'placeholder='Email' />
          <button className='bg-black text-white p-3 rounded'>Get started</button> 
          <br/>
          <p className='text-white'>we care about the protection of your data. read our <br />
          <p className='p-5 text-black font-bold'><Link to="/PrivecyPolicy">PrivecyPolicy</Link></p>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Newslatter
 