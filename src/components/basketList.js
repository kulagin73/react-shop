import { BasketItem } from './basketItem';

export const BasketList = (props) => {
    const {order,
          showBasket = Function.prototype,
          removeFromBasket = Function.prototype,
          downQuantity = Function.prototype,
          upQuantity = Function.prototype
        } = props;

    const totalPrice = order.reduce((sum,elem) => {
        return sum + elem.price * elem.quantity;
    },0)

    return (
        <ul className="collection basketList">
            <li className="collection-item active">Коризина</li>
             {order.length ? order.map((elem,index) => {
                    return  <BasketItem key={index} elem={elem} removeFromBasket={removeFromBasket} downQuantity={downQuantity} upQuantity={upQuantity} /> 
                }) : <li className="collection-item">Коризина пуста</li>
             }
            <li className="collection-item active">Итого: {totalPrice} руб.</li>
            <i onClick={showBasket} className="material-icons basket-close">close</i>
        </ul>
    )
}