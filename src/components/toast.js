import React,{useEffect,useContext} from "react";
import { ShopContext } from "../context";

export const Toast = () => {
   
     const {toast = '',closeToast} = useContext(ShopContext);

     useEffect(() => {
         const timerId = setTimeout(closeToast,3000);

         return () => {
             clearTimeout(timerId);
         }
     },[toast])

    return (
       <div className="toast-container">
           <span className="toast">{toast} добавлен в корзину</span>
       </div>
    )
}