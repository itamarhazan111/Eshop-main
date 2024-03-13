import {USER_SIGNIN,USER_SIGNOUT,ADD_TO_CART, REMOVE_FROM_TYPE,SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD, CLEAR_CART} from '../Actions.jsx'

const storeReducer=(state,{type,payload})=>{
    switch(type){

        case USER_SIGNIN:{
            return {...state,userInfo:payload}
        }
        case USER_SIGNOUT:{
            return {
                ...state,
                userInfo:null,
                cart:{cartItems:[],shippingAddress:[],paymentMethod:""}
            }
        }
        case ADD_TO_CART: {
            const newItem = payload;
            const existingItem = state.cart.cartItems.find(
              (item) => item._id === newItem._id
            );
            const cartItems = existingItem
              ? state.cart.cartItems.map((item) =>
                  item._id === existingItem._id ? newItem : item
                ) //סינטקס מוזר אבל הוא מחזיר את כל המערך, עם החלפה של את האייטם הישן בחדש
              : [...state.cart.cartItems, newItem];
      
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
      
            return { ...state, cart: { ...state.cart, cartItems } };
          }
          case REMOVE_FROM_TYPE:{
            const cartItems=state.cart.cartItems.filter((item)=>item._id!==payload._id)
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            return { ...state, cart: { ...state.cart, cartItems } };
          }
          case SHIPPING_ADDRESS:{
            const shippingAddress=payload;
            localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
            return{...state,cart:{...state.cart,shippingAddress:shippingAddress},}
          }
          case SAVE_PAYMENT_METHOD:{
            return{...state,cart:{...state.cart,paymentMethod:payload}}
          }
          case CLEAR_CART:{
            return {...state,cart:{cartItems:[],shippingAddress:{},paymentMethod:""}}
          }
        default :return{...state};
    }

}

export default storeReducer