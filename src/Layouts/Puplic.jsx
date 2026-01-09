import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Puplic() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className='grow'>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Puplic
