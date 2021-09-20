export const Cart = (props) => {
    const { quantity = 0,showBasket = Function.prototype} = props;
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