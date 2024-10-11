import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_BY_CATEGORY, GET_SPECIFIC_PRODUCT, Get_Error } from "../type";

const getAllProductsAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetData(`/products`);
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

const getSpecificProductAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/products/${id}`);
        dispatch({
            type:GET_SPECIFIC_PRODUCT,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}
const getAllProductsByCategoryAction =  (name)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/products/category/${name}`);
        dispatch({
            type:GET_ALL_PRODUCTS_BY_CATEGORY,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }
    


}

export { getAllProductsAction , getSpecificProductAction , getAllProductsByCategoryAction}