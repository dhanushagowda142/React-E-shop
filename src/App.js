import React from 'react'
import Menu from './Components/default/Menu'
import Container from './pages/Container'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoclose={4000} position="top-right"/>
      <div className='container-main'>
        <Container/>
      </div>
    </BrowserRouter>
  )
}

export default App