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
import SingleProduct from '../Screen/Product/SingleProduct'
import PrivateRouter from '../PrivateRouter/PrivateRouter'

function Container() {
  return (
    <Routes>
        <Route element={<PrivateRouter/>}>
          <Route path={'/'} element={<Home/>}>
            <Route path={'/'} element={<Store/>} />
            <Route path={'/product/:id'} element={<SingleProduct/>} />
            <Route path={'cart'} element={<ProductCart/>} />
            <Route path={'checkout'} element={<ProductCheckout/>} />
          </Route>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
        </Route>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
  )
}

export default Container