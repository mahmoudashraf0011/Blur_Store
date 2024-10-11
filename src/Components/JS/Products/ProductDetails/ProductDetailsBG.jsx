import React from 'react'

export default function ProductDetailsBG({cate,img}) {
  return (
    <div className='ProductDetailsBG'>
      <div className='ProductDetailsBGImg'>
        <img  src={img} alt='productImg' />
      </div>
    </div>
  )
}
