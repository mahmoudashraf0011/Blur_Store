import axios from "axios";
import baseURL from "../API/baseURL";
const useGetData=async (url,params)=>{
    const res= await baseURL.get(url,params)
    return res.data;
}


export { useGetData}