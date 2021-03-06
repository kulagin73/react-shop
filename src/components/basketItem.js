import { useContext } from "react";
import { ShopContext } from "../context";

export const BasketItem = (props) => {
    const {elem} = props;

    const {removeFromBasket,downQuantity,upQuantity} = useContext(ShopContext);

    return (
        <li key={elem.id} className="collection-item" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
            <span style={{marginRight:'20px'}}>{elem.name}</span>
            <span style={{marginRight:'20px'}}><button className="btn" onClick={() => downQuantity(elem.id)}>-</button> x{elem.quantity} <button className="btn" onClick={() => upQuantity(elem.id)}>+</button></span>
            <span>{elem.price} руб.</span>
            <span onClick={() => removeFromBasket(elem.id)}><i className="material-icons" style={{cursor:'pointer'}}>delete</i></span>
        </li>
    )
}