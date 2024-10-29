import React from 'react'
import Logo from '../assets/Logo.jpg'

const Header = () => {
  return (
    <>
    <div className={`w-full min-h-16 bg-white py-2`}>
        <div className='w-full h-auto flex justify-start px-12 items-center gap-20 text-xl font-semibold'>
            <img src={Logo} alt="" className='w-16 h-16'/>
            <a href="/">Home</a>
            <a href="/">Categories</a>
            <a href="/">About Us</a>
        </div>
        
    </div> 
    </>
  )
}

export default Header
