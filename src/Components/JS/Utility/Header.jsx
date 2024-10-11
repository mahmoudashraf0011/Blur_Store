import React, { useEffect, useRef, useState } from 'react'
import logo from '../../../images/logo.png'
import { Link, useParams } from 'react-router-dom'
import '../../CSS/Utility/Header.css'
import img from '../../../images/testcard.jpg'
import AllCategoriesHook from '../../../LogicHooks/Categories/AllCategoriesHook'
export default function Header() {
  const [categories]=AllCategoriesHook();
  const [cartNum,setCartNum]=useState()

  useEffect(()=>{
    if(localStorage.getItem("cart")){
      setCartNum(localStorage.getItem("cart"))
    }else{
      setCartNum(0)
    }
 
  },[])

  const cartRef=useRef();
  const onOpenCart=(e)=>{
    cartRef.current.style.transform="scale3d(1,1,1)"
  }
  const onCloseCart=(e)=>{
    cartRef.current.style.transform="scale3d(0,1,1)"
  }
  return (
    <header>
            <div className='headerContent'>
                <div className='logo'>
                     <Link to="/"><img src={logo} alt='logo'/></Link>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    {
                      categories?categories.map((item)=>{
                        return (<Link to={`/products/category/${item}`} onClick={()=>localStorage.setItem("filter",item)}>{item}</Link>)
                      }):""
                    }
                </nav>
                <ul className='headerRight'>
                    <li className='searchIcon'><i class="fa-solid fa-magnifying-glass"></i> Search</li>
                    <li className='userIcon'><i class="fa-regular fa-user"></i></li>
                    <li className='cartIcon' onClick={onOpenCart}><i class="fa-solid fa-cart-shopping"></i><span className='cartNumber'>{cartNum}</span></li>
                    <div className='cartDropdown' ref={cartRef}>
                      <div className="overly">
                        <div className='cartContent'>
                          <div className="cartUp">
                            <p className='cartHeader'>Cart <span>{cartNum} items</span></p>
                            <li className='closeCart' onClick={onCloseCart}><i class="fa-solid fa-xmark"></i></li>
                          </div>
                          <div className='cartItems'>
                            <div className='cartItem'>
                              <div className='cartLeft'>
                                <div className="cartItemImg">
                                  <img src={img} alt='product' />
                                </div>
                                <div className='cartQty'>
                                  <span>-</span>1<span>+</span>
                                </div>
                              </div>
                              <div className='cartMiddle'>
                                <h4 className='cartItemTitle'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                                <span className='cartItemUser'>By Burrow Charcoal</span>
                                <p className='cartItemStock'>In stock! Ships in 5–10 business days</p>
                              </div>
                              <div className='cartLeft'>
                                <p className='cartItemPrice'>$123.23</p>
                                <button className='cartItemRemove'>Remove</button>
                              </div>
                            </div>
                            <div className='cartItem'>
                              <div className='cartLeft'>
                                <div className="cartItemImg">
                                  <img src={img} alt='product' />
                                </div>
                                <div className='cartQty'>
                                  <span>-</span>1<span>+</span>
                                </div>
                              </div>
                              <div className='cartMiddle'>
                                <h4 className='cartItemTitle'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                                <span className='cartItemUser'>By Burrow Charcoal</span>
                                <p className='cartItemStock'>In stock! Ships in 5–10 business days</p>
                              </div>
                              <div className='cartLeft'>
                                <p className='cartItemPrice'>$123.23</p>
                                <button className='cartItemRemove'>Remove</button>
                              </div>
                            </div>
                            <div className='cartItem'>
                              <div className='cartLeft'>
                                <div className="cartItemImg">
                                  <img src={img} alt='product' />
                                </div>
                                <div className='cartQty'>
                                  <span>-</span>1<span>+</span>
                                </div>
                              </div>
                              <div className='cartMiddle'>
                                <h4 className='cartItemTitle'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h4>
                                <span className='cartItemUser'>By Burrow Charcoal</span>
                                <p className='cartItemStock'>In stock! Ships in 5–10 business days</p>
                              </div>
                              <div className='cartLeft'>
                                <p className='cartItemPrice'>$123.23</p>
                                <button className='cartItemRemove'>Remove</button>
                              </div>
                            </div>
                          </div>
                          <div className='cartPurchase'>
                            <div className='cartPurchaseSubtotal'>
                              <div className='cartPurchaseSubtotalTitle'>Subtotal</div>
                              <div className='cartPurchaseSubtotalTitlePrice'>$8000</div>
                            </div>
                            <div className='cartPurchaseSaving'>
                              <div className='cartPurchaseSavingTitle'>Sale Savings</div>
                              <div className='cartPurchaseSavingPrice'>-$1200</div>
                            </div>
                            <div className='cartPurchaseShipping'>
                              <div className='cartPurchaseShippingTitle'>Shipping</div>
                              <div className='cartPurchaseShippingDesc'>Calculated at checkout</div>
                            </div>
                            <div className='cartPurchasePromo'>Apply promo code +</div>
                            <div className='cartPurchaseTotal'>
                              <div className='cartPurchaseSubtotalTitle'>Total</div>
                              <div className='cartPurchaseSubtotalTitlePrice'>$6800</div>
                            </div>
                            <button className='checkoutBtn'>Secure Checkout</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </ul>
            </div>
     
    </header>
  )
}
