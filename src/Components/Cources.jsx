import React from 'react'
import html from '../Img/html.png'
import js from '../Img/js.png'
import react from '../Img/react.png'
const Cources = () => {
  return (
    <div className='py-[100px] px-2'>
       <h1 className='text-center text-3xl font-bold my-5 text-[#1a78f2]'>OUR COURCES</h1>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
           
         <div className='shadow-xl h-[450px] my-2 bg-slate-200  hover:scale-105 duration-500'>
          <div className='text-4xl font-bold text-center my-[50px] text-[#3187f7] '>HTML & CSS</div>
          <img src={html} alt=''className='mx-[90px] h-[200px] w-[200px]'/>
          <button className='w-[30%] bg-black justify-center text-white p-2 rounded mx-[120px]'>Buy now</button>
        </div>

           <div className='shadow-xl h-[450px] my-2 bg-slate-200 hover:scale-105 duration-500'>
           <div className='text-4xl font-bold text-center my-[50px] text-[#3187f7]'>Java Script</div>
           <img src={js} alt=''className='mx-[90px] h-[200px] w-[200px]'/>
          <button className='w-[30%] bg-black justify-center text-white p-2 rounded mx-[130px]'>Buy now</button>
           </div>

         <div className='shadow-xl  h-[450px] my-2 bg-slate-200 hover:scale-105 duration-500'>
         <div className='text-4xl font-bold text-center my-[50px] text-[#3187f7]'>React</div>
         <img src={react} alt=''className='mx-[90px] h-[200px] w-[200px]'/>
          <button className='w-[30%] bg-black justify-center text-white p-2 rounded mx-[120px]'>Buy now</button></div>




        </div>
      
      
    </div>
  )
}

export default Cources
