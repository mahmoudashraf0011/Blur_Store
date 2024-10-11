import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import Categories from '../../Components/JS/Home/Categories';
import allCategoriesAction from '../../redux/actions/CategoriesAction';

export default function AllCategoriesHook() {
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(allCategoriesAction());
    },[])
  
    const categories=useSelector(state=> state.CategoriesReducer.categories);
  return [categories]
}
