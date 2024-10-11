import React from 'react'
import CartHook from '../../../../LogicHooks/CartHook';

export default function ProductDetails({title,price}) {
  const [onHandleCart]=CartHook();
  return (
    <div className='productDetails'>
      <h4 className='ProductDetailsTitle'>{title}</h4>
      <p className='ProductDetailsPrice'>${price}</p>
      <div className='productDetailsAddCart'>
        <select name="qty" id="qty" className='productDetailsAddCartQty'>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            <option value="5" >5</option>
            <option value="6" >6</option>
            <option value="7" >7</option>
            <option value="8" >8</option>
            <option value="9" >9</option>
            <option value="10" >10</option>
        </select>
        <button className='productDetailsAddCartButton cardItemAdd' onClick={onHandleCart} >add to cart</button>
      </div>
      <div className='productDetailsInfo'>
        <li><i class="fa-solid fa-cubes-stacked"></i><a >In stock! Ships in 5–10 business days</a></li> 
        <li><i class="fa-solid fa-money-bill-wave"></i>Starting at $20/mo or 0% APR with Affirm. <a>Check your purchasing power</a></li>
      </div>
    </div>
  )
}
