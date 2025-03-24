import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";

const Account = () => {
  return (
    <div>
      <div className='m-4 mt-6'>
        <p className='font-semibold text-xl text-left h-10'>Account Settings</p>
      </div>

      <div className='border-b border-gray-200'></div>

      <div className='m-4 mt-6'>
        <div className="flex mt-5">
          <div className='h-16 w-16 rounded-full'>
            <img src="../public/Marry_Doe.png" className='object-cover h-full w-full' />
          </div>
          <div className='flex flex-col ml-5'>
            <div className='text-xs font-semibold text-left'>Marry Doe</div>
            <div className='text-xs'>Marry@Gmail.com</div>
          </div>
        </div>
        <div className='mt-10 text-left'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>

      </div>
      <div className='border-b border-dashed border-gray-300 border-1'></div>
      <div className='border-b border-dashed border-gray-300 border-1 relative top-[250px]'>
      </div>
      <Link to="/" className='relative top-[265px] flex justify-center'><IoMdHome className='scale-150' /></Link>
    </div>
  )
}

export default Account