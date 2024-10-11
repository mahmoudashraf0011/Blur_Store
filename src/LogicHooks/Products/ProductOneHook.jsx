

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByCategoryAction, getSpecificProductAction } from '../../redux/actions/ProductsAction';


export default function ProductOneHook(id) {


    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getSpecificProductAction(id));
    },[])
  
    const product=useSelector(state=> state.ProductsReducer.specificProduct);

  return [product]
}
