import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_CATEGORIES, Get_Error } from "../type";



 const allCategoriesAction =  ()=> async (dispatch)=>{
        try{
            const response=await useGetData(`products/categories`);
            dispatch({
                type:GET_ALL_CATEGORIES,
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
 

export default allCategoriesAction;