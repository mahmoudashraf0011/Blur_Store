import React from 'react'
import AllCategoriesHook from '../../../../LogicHooks/Categories/AllCategoriesHook';
import { useParams } from 'react-router-dom';
import FilterProductsHook from '../../../../LogicHooks/Products/FilterProductsHook';

export default function ProductsFilter() {
  const [categories]=AllCategoriesHook();
  const [filterOption,onHandleFilter]=FilterProductsHook();
  const {name}=useParams();
  let cate="";
  if(localStorage.getItem("filter")){
    cate=localStorage.getItem("filter")
  }
  return (
    <div className='productsFilter'>
        <div className='filterByCate'>
            <h4><i class="fa-solid fa-arrow-down-short-wide"></i> Filter</h4>
            <form name="cates" id="cates">
                {
                  categories?categories.map((item)=>{
                    return (
                      <>
                        <input type="radio" id={item} name="category" value={item} onChange={onHandleFilter} defaultChecked={cate?cate:""}/>
                        <label for={item}>{item}</label><br/>
                      </>

                    )
                  }):""
                }

            </form>
        </div>
        <hr/>


    </div>
  )
}
