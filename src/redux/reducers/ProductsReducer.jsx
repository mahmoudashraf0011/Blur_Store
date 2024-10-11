import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_BY_CATEGORY, GET_SPECIFIC_PRODUCT } from "../type";


const initial ={
    products:[],
    specificProduct:[],
    productsByCategory:[]
}

export const ProductsReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products:action.payload,
                loading:false
            }
        case GET_ALL_PRODUCTS_BY_CATEGORY:
                return{
                    ...state,
                    productsByCategory:action.payload,
                }
        case GET_SPECIFIC_PRODUCT:
                return{
                    ...state,
                    specificProduct:action.payload,
                }
        default:
            return state;
    }
}

