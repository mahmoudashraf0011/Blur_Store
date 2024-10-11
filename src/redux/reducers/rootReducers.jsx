import { combineReducers } from "redux";
import { CategoriesReducer } from "./CatgoriesReducer";
import { ProductsReducer } from "./ProductsReducer";

export default combineReducers({
  CategoriesReducer : CategoriesReducer,
  ProductsReducer:ProductsReducer

})