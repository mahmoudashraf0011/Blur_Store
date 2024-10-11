import React, { useState } from 'react'

export default function CartHook() {
    const onHandleCart=(e)=>{
        const allItemAdd= document.querySelectorAll(".cardItemAdd");
        allItemAdd.forEach((item)=>{
            if(item==e.target){
                if( item.classList.contains("added")){
                    item.style.backgroundColor="rgb(139, 59, 53)";
                    item.innerHTML="Add to Cart"
                    item.classList.remove("added")
     
                    let newCart=parseInt(localStorage.getItem("cart"))-1
                    localStorage.setItem("cart",newCart)
                    let cartNumber=document.querySelector('.cartNumber');
                    cartNumber.innerHTML=parseInt(cartNumber.innerHTML)-1
                }else{

                    item.style.backgroundColor="black";
                    item.innerHTML="Remove From Cart"
                    item.classList.add("added")
                    if(localStorage.getItem("cart")){
                        let newCart=parseInt(localStorage.getItem("cart"))+1
                        localStorage.setItem("cart",newCart)
                        
                    }else{
                        localStorage.setItem("cart",1)
                    }
                    let cartNumber=document.querySelector('.cartNumber');
                    cartNumber.innerHTML=parseInt(cartNumber.innerHTML)+1


                }   

                
            }

        })


       

    }


  return [onHandleCart]
}
