import React from 'react'
import logo from '../../assets/logo.png'
import './Splash.css'
function Splash() {
  return (
    <div className='containerSplash'>
        <img className='logoSplash' src={logo} alt='logo' />
    </div>
  )
}

export default Splash