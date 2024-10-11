import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../redux/actions/ProductsAction';
import { useNavigate } from 'react-router-dom';

export default function FilterProductsHook() {
    const [filterOption,setFilterOption]=useState("")

// get all Products
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getAllProductsAction());
},[])
const AllProducts=useSelector(state=> state.ProductsReducer.products);
const nanigate=useNavigate();
let products=[];
const onHandleFilter=(e)=>{
    console.log(e.target.value);
    setFilterOption(e.target.value)
    if(e.target.value ==0){
       localStorage.setItem("filter","all")
    }else{
       localStorage.setItem("filter",e.target.value)
       nanigate(`/products/category/${e.target.value}`)

    }
}
  return [filterOption,onHandleFilter,products]
}
