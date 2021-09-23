import { useContext } from "react";
import { ShopContext } from "../context";
import { Product } from "./product";

export const GoodsList = () => {

    const {goods = []} = useContext(ShopContext);

    return (
        <div className="goodsList">
            {
                goods.map((elem,index) => {
                    return <Product key={index}  {...elem} />
                })
            }
        </div>
    )
}