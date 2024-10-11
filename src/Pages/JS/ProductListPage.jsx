import React, { useEffect, useRef, useState } from 'react'
import BGProductList from '../../Components/JS/Products/ProductList/BGProductList'
import { useParams } from 'react-router-dom';
import elec2 from '../../images/cates/elec2.jpg'
import jew2 from '../../images/cates/jew2.webp'
import man2 from '../../images/cates/man2.jpeg'
import women2 from '../../images/cates/woman2.webp'
import ProductListContainer from '../../Components/JS/Products/ProductList/ProductListContainer';
export default function ProductListPage() {
  const {name}=useParams();
  const [img,setImg]=useState("");
 
  useEffect(()=>{
    if(name=="electronics"){
      setImg(elec2)
    }else if(name == "jewelery"){
      setImg(jew2)
    }else if(name=="men's clothing"){
      setImg(man2)
    }else{
      setImg(women2)
    }
  })
  return (
    <div className='productListPage'>
        <BGProductList bg={img}/>
        <ProductListContainer />
    </div>
  )
}
