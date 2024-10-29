import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import CartContextProvider from './context/CartContextProvider';
import Home from './components/Home'
import Layout from './Layout'
import Header from './components/Header';
import Payment from './components/Payment';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='payment' element={<Payment />}/>
        
      </Route>
    )
  )
  return (
    <CartContextProvider>
      <Header />  
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <RouterProvider router={router} />
      </div>
    </CartContextProvider>
  )
}

export default App
