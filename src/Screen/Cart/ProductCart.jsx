import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


function ProductCart() {
  const [cart,setCart] = useState(false)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>cart info</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart && cart.products.map((item,index) =>{
                  return(
                    <tr>
                      <th>Title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductCart