import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const rootReducer = combineReducers({
    productReducer,
    product: selectedProductReducer
})

export default rootReducer