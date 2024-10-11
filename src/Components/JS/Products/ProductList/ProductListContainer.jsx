import React, { useEffect } from 'react'
import ProductsFilter from './ProductsFilter'
import ProductListCardContainer from './ProductListCardContainer'
import'../../../CSS/Products.css'
import { useParams } from 'react-router-dom'

export default function ProductListContainer() {
  const {name}=useParams();
  useEffect(()=>{
    localStorage.setItem("filter",name)
  },[])
  return (
    <div className='productListContainer'>
        <ProductsFilter />
        <ProductListCardContainer />

    </div>
  )
}
