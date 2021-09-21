import React,{useEffect} from "react";

export const Toast = (props) => {
   
     const {name = '', closeToast = Function.prototype} = props;

     useEffect(() => {
         const timerId = setTimeout(closeToast,3000);

         return () => {
             clearTimeout(timerId);
         }
     },[name])

    return (
       <div className="toast-container">
           <span className="toast">{name} добавлен в корзину</span>
       </div>
    )
}