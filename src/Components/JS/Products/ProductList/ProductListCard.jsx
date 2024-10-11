import React from 'react'
import { Link } from 'react-router-dom'
import CartHook from '../../../../LogicHooks/CartHook'

export default function ProductListCard({img,title,price,id,onAddToCart,onDeleteFromCart}) {
  const [onHandleCart]=CartHook();
  return (
    <div className='cardItem'>
      <div className='cardItemImg'>
        <Link to={`/products/${id}`}>
         <img src={img} alt='product'/>
        </Link>
      </div>
      <h3 className='cardItemTitle'>{title}</h3>
      <span className='cardItemPrice'>${price}</span>
      <button className='cardItemAdd' onClick={onHandleCart}>Add to Cart</button>
  
    </div>
  )
}
