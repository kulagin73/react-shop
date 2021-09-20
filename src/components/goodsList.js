import { Product } from "./product";

export const GoodsList = (props) => {
    const { goods = [], pushInCart = Function.prototype} = props;
    return (
        <div className="goodsList">
            {
                goods.map((elem,index) => {
                    return <Product key={index}  {...elem} pushInCart={pushInCart}/>
                })
            }
        </div>
    )
}