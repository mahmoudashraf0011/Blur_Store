import React from 'react'
import '../../../CSS/Products.css'
export default function BGProductList({bg}) {
  return (
    <div className='bgProductList' style={{backgroundImage:`url(${bg})`}}>
      <div className='overly'>
        <div className='BGProductListContent'>
            <span>last chance</span>
            <h2>Fall Sale</h2>
            <p>Up to 60% OFF</p>
        </div>
      </div>
      
    </div>
  )
}
