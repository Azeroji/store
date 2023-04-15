import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar.js'

export default function Layout(){
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
