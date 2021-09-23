import { BasketItem } from './basketItem';
import { useContext } from "react";
import { ShopContext } from "../context";


export const BasketList = () => {

    const {order,showBasket} = useContext(ShopContext);

    const totalPrice = order.reduce((sum,elem) => {
        return sum + elem.price * elem.quantity;
    },0)

     console.log(order)
    return (
        <ul className="collection basketList">
            <li className="collection-item active">Коризина</li>
             {order.length ? order.map((elem,index) => {
                    return  <BasketItem key={index} elem={elem} /> 
                }) : <li className="collection-item">Коризина пуста</li>
             }
            <li className="collection-item active">Итого: {totalPrice} руб.</li>
            <i onClick={showBasket} className="material-icons basket-close">close</i>
        </ul>
    )
}