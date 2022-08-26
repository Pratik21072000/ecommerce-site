//Reducer takes initialState and action

import { ActionTypes } from "../constants/action-types"

const initialState = {
    products:[]
}


export const productReducer = (state=initialState,{type, payload}) =>{
switch(type){
    case ActionTypes.SET_PRODUCTS :
        return {...state, products:payload};

        default: return state
}
}

export const selectedProductReducer = (state={},{type, payload}) =>{
switch(type){
    case ActionTypes.SELECTED_PRODUCT :
        return {...state, ...payload};
    case ActionTypes.REMOVE_PRODUCT://When we go to other product the prvios clicked product is shown for some seconds.So to avoid that we create a REMOVE_PRODUCT action type and create an action creator with payload empty, then we dispatch an action in the selectedProductReducer and return empty object and we pass the action creator in the ProductDetails and in useEffect we return the selected product.
        return {}
        default: return  state;
}
}