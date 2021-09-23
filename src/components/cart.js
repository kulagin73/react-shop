import { useContext } from "react";
import { ShopContext } from "../context";

export const Cart = () => {

    const { order,showBasket} = useContext(ShopContext);
    const quantity = order.length;
    
    return (
        <div className="cart" onClick={showBasket}>
            <div style={{position:'relative'}}>
                <i className="material-icons">shopping_cart</i>
                {
                    quantity ? <span className="cart-quantity">{quantity}</span> : null
                }
            </div>
        </div>
    )
}