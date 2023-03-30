import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div className='absolute flex h-full w-full flex-col'>
    <header className='h-[8%] md:h-[10%]'>
    <Navbar/>

    </header>
    <main className='h-[93%] md:[90%] '>
    <Outlet/>
    </main>
    </div>
  )
}

export default Home