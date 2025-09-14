import React from 'react'
import Nav from './nav'
import { Outlet } from 'react-router-dom'
import Footer from './footer'

function Layout() {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout