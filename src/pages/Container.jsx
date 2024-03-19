import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Components/default/About'
import Contact from '../Components/default/Contact'
import Login from '../Components/auth/Login'
import Register from '../Components/auth/Register'
import Pnf from '../Components/default/Pnf'
import Home from '../Components/default/Home'
import Store from '../Screen/Product/Store'
import ProductCart from '../Screen/Cart/ProductCart'
import ProductCheckout from '../Screen/Checkout/ProductCheckout'

function Container() {
  return (
    <Routes>
        <Route path={'/'} element={<Home/>}>
          <Route path={'/'} element={<Store/>} />
          <Route path={'cart'} element={<ProductCart/>} />
          <Route path={'checkout'} element={<ProductCheckout/>} />
        </Route>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
  )
}

export default Container