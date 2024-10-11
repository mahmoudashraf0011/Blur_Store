
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCategoryAction } from '../../redux/actions/ProductsAction';


export default function AllProductsByCategoryHook(name) {


    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getAllProductsByCategoryAction(name));
    },[name])
  
    const products=useSelector(state=> state.ProductsReducer.productsByCategory);

  return [products]
}
