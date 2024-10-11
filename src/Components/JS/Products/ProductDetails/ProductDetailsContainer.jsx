import React from 'react'
import ProductDetailsBG from './ProductDetailsBG'
import ProductDetails from './ProductDetails'
import ProductOneHook from '../../../../LogicHooks/Products/ProductOneHook'

export default function ProductDetailsContainer({cate,img,title,price}) {

  return (
    <div className='productDetailsContainer'>
        <h3 className='ProductDetailsBGHeader'>{cate}</h3>
        <div className="productDetailsContainerItems">
            <ProductDetailsBG img={img}/>
            <ProductDetails title={title} price={price}/>
        </div>
     </div>
  )
}
