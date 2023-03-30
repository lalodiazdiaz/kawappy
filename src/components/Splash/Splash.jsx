import React from 'react'
import logo from '../../assets/logo.png'
function Splash() {
  return (
    <div className='absolute h-full w-full bg-fondo-blue flex items-center justify-center '>
        <img className='h-5/6 animate-pulse ' src={logo} alt='logo' />
    </div>
  )
}

export default Splash