import { createContext, useReducer } from "react";
import Cookies from 'js-cookie';
import storeReducer from "./reducers/storeReducser";

export const Store=createContext();
const initialState={
    //userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
    userInfo:Cookies.get('userInfo')?JSON.parse(Cookies.get('userInfo')):null,
    cart: {
        cartItems: localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [],
        shippingAddress: localStorage.getItem("shippingAddress")
          ? JSON.parse(localStorage.getItem("shippingAddress"))
          : {},
        paymentMethod: localStorage.getItem("paymentMethod")
          ? localStorage.getItem("paymentMethod")
          : "",
      },
};

export const StoreProvider=({children})=>{
    const [state,dispatch]=useReducer(storeReducer,initialState);
    const body={state,dispatch};
    return <Store.Provider value={body}>{children}</Store.Provider>
}