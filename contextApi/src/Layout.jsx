import React from 'react'
import Cart from './components/Cart'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
    
    <Outlet />
    <Cart />
    </>
  )
}

export default Layout
