import React,{createContext,useReducer} from "react";
import { reducer } from "./reducer";

export const  ShopContext  = createContext();

const initialState = {
    goods:[],
    loading:true,
    order:[],
    idBasketShow:false,
    toast:''
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer,initialState);

    value.closeToast = () => {
        dispatch({type:'CLOSE_TOAST'})
    }

    value.removeFromBasket = (id) => {
        dispatch({type:'REMOVE_FROM_BASKET',payload:{id:id}})
    }

    value.showBasket = () => {
        dispatch({type:'SHOW_BASKET'})
    }

    value.setLoading = () => {
        dispatch({type:'SET_LOADING'})
    }

    value.pushInCart = ({id,name,price}) => {
        dispatch({type:'ADD_TO_BASKET',payload:{id:id,name:name,price:price}})
    }

    value.upQuantity = (id) => {
        dispatch({type:'UP_QUANTITY', payload:{id:id}})
    }

    value.downQuantity = (id) => {
        dispatch({type:'DOWN_QUANTITY', payload:{id:id}})
    }

    value.setGoods = (data) => {
        dispatch({type:'SET_GOODS',payload:data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}