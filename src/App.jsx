import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='flex justify-center'>
        <div className='h-[600px] w-[420px] border-2 border-gray-300'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/login" element={<Account />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/register" element={<Account />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
