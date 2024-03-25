import React from 'react'
import { useAuth } from '../CustomHook/Auth'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRouter() {
 const {contextData} = useAuth()

 //if token is present and login is success => redirect to all components to outlet
 //if login is false and token is not present => redirect to login path

  return (
   <>
     {
        contextData?.token ?<Outlet/>:<Navigate to={'/login'}/>
     }
   </>
  )
}

export default PrivateRouter