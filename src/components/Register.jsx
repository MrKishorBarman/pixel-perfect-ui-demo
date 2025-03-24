import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className='m-4 mt-8'>
        <h2 className='text-3xl font-bold text-left mb-4 mt-8'>Create your <br />PopX account</h2>
        <p className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-[101px] bg-white'>Full Name<span className='text-red-600'>*</span></div>
        </p>
        <input type="text" disabled placeholder="Marry Doe" className='border-1 border-gray-300 rounded w-full h-10 pl-3.5 text-sm font-semibold placeholder-gray-600' />
        <p className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-[101px] bg-white'>Phone number<span className='text-red-600'>*</span></div>
        </p>
        <input type="text" disabled placeholder="Marry Doe" className='border-2 border-gray-300 rounded w-full h-10 pl-3.5 text-sm font-semibold placeholder-gray-600' />
        <p className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-[101px] bg-white'>Email address<span className='text-red-600'>*</span></div>
        </p>
        <input type="text" disabled placeholder="Marry Doe" className='border-2 border-gray-300 rounded w-full h-10 pl-3.5 text-sm font-semibold placeholder-gray-600' />
        <p className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-[101px] bg-white'>Password<span className='text-red-600'>*</span></div>
        </p>
        <input type="text" disabled placeholder="Marry Doe" className='border-2 border-gray-300 rounded w-full h-10 pl-3.5 text-sm font-semibold placeholder-gray-600' />
        <p className='text-[#8449fe] text-sm font-semibold text-left relative left-[15px] top-[8px]'>
          <div className='w-[101px] bg-white'>Company name</div>
        </p>
        <input type="text" disabled placeholder="Marry Doe" className='border-2 border-gray-300 rounded w-full h-10 pl-3.5 text-sm font-semibold placeholder-gray-600' />
        <p className='font-semibold text-gray-600 text-sm text-left mt-4'>Are you an Agency?<span className='text-red-600'>*</span></p>
        <div className='flex mt-2'>
          <div className='flex space-x-2 mr-7'>
            <input type="radio" id="yes" checked className='scale-150 accent-[#6c25ff]' />
            <label htmlFor='yes'>
              <p className='font-semibold text-gray-600 text-sm'>Yes</p>
            </label>
          </div>
          <div className='flex space-x-2'>
            <input type="radio" id="no" disabled className='scale-150' />
            <label htmlFor='no'>
              <p className='font-semibold text-gray-600 text-sm'>No</p>
            </label>
          </div>
        </div>

        <Link to="/register/register" className="w-full mt-14 h-10 bg-[#6c25ff] text-white font-bold text-sm rounded flex justify-center items-center ">Create Account</Link>
      </div>
    </div>
  )
}

export default Register