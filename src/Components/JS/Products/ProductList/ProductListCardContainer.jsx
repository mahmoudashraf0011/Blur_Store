import React, { useState } from 'react'
import ProductListCard from './ProductListCard'
import img from '../../../../images/testcard.jpg'
import { useParams } from 'react-router-dom';
import AllProductsByCategoryHook from '../../../../LogicHooks/Products/ProductsByCategoryHook';
import CartHook from '../../../../LogicHooks/CartHook';

export default function ProductListCardContainer() {
  let {name}=useParams();
  if(localStorage.getItem("filter")){
    name=localStorage.getItem("filter")
  }
  const [products]=AllProductsByCategoryHook(name)
  const[onAddToCart,onDeleteFromCart]=CartHook();
  return (
    <div className='productListCardContainer'>
      <h2 className='cardItemsHeader'>{name}</h2>
        <div className='cardItems'>
        {
            products?products.map((item)=>{
              return(
                <ProductListCard img={item.image} title={item.title} price={item.price} key={item.id} id={item.id} onAddToCart={onAddToCart} onDeleteFromCart={onDeleteFromCart}/>
              )
            }):""
          }


        </div>

    </div>
  )
}
