import React from 'react'
import laptop from '../Img/laptop.png'

const Expert = () => {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
      <div className='col-span-1 md:w-[80%] text-center'>
      <img src={laptop} alt=''className='inline'/>
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#3187f7] font-bold my-2'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>techhelp website will help you to learn frontend development in easy way all the contents are written by best frontend developer
        </p>
        <button className='w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
      </div>
    </div>
  )
}

export default Expert

