export const Cart = (props) => {
    const { quantity = 0} = props;
    return (
        <div className="cart">
            <div style={{position:'relative'}}>
                <i className="material-icons">shopping_cart</i>
                {
                    quantity ? <span className="cart-quantity">{quantity}</span> : null
                }
            </div>
        </div>
    )
}