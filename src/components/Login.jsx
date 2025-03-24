import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    console.log("parent clicked")
    setIsActive(true)
    setTimeout(() => setIsActive(false), 200)
  }

  return (
    <div>
      <div className='m-4 mt-8'>
        <h2 className='text-3xl font-bold text-left'>Signin to your <br /> PopX account</h2>
        <p className='text-left text-xl text-gray-500'>Lorem ipsum dolor sit amet,</p>
        <p className='text-left text-xl mb-4 text-gray-500'>consectetur adipiscing elit,</p>
        <div className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-28 bg-white'>Email Address</div>
        </div>
        <input type="text" readOnly placeholder="Enter email address" className='border-2 border-gray-300 rounded w-full h-10 pl-3.5 text-sm outline-none' onClick={handleClick} />
        <div className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-28 bg-white'>Password</div>
        </div>
          <input type="text" readOnly placeholder="Enter password" className='border-2 border-gray-300 rounded w-full h-10 text-sm pl-3.5 outline-none' onClick={handleClick}/>
        <Link to="/login/login" className={`flex justify-center items-center w-full ${isActive ? 'bg-blue-400' : 'bg-[#cbcbcb]'} text-white font-bold text-sm my-2 rounded whitespace-nowrap h-10 mt-6`}>Login</Link>
      </div>
    </div>
  )
}

export default Login