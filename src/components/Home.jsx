import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='m-4'>
        <div className='flex flex-col justify-end items-start h-[565px]'>
          <h2 className='text-3xl font-bold'>Welcome to PopX</h2>
          <p className='text-left text-xl text-gray-500'>Lorem ipsum dolor sit amet,</p>
          <p className='text-left text-xl mb-8 text-gray-500'>consectetur adipiscing elit,</p>
          <Link className='w-full bg-[#6c25ff] text-white font-bold text-sm my-2 rounded whitespace-nowrap h-12 flex justify-center items-center' to="/register">Create Account</Link>
          <Link className='w-full bg-[#cebafb] text-black font-bold text-xs rounded whitespace-nowrap h-12 flex justify-center items-center' to="/login">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Home