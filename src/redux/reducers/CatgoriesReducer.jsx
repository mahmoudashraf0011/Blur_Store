import { GET_ALL_CATEGORIES } from "../type";


const initial ={
    categories:[],
}

export const CategoriesReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return{
                ...state,
                categories:action.payload,
            }
        default:
            return state;
    }
}

