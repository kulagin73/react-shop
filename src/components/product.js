import { useContext } from "react";
import { ShopContext } from "../context";

export const Product = (props) => {
    const {
        index, 
        granted,
        price,
        mainId,
        displayName,
    } = props;

    const {pushInCart} = useContext(ShopContext);
    
    return (
        <div key={index} id={mainId} className="row">
            <div className="col s12">
                <div className="card">
                    <div className="card-image">
                        <img src={granted[0].images.full_background} alt={displayName}/>
                    </div>
                    <div className="card-content">
                        <p className="card-title">{granted[0].description}</p>
                         {
                         price.regularPrice === price.finalPrice ?
                                <p className="card-price"><span>{price.finalPrice} руб.</span></p> : <p className="card-price"><span className="old-price">{price.regularPrice} руб.</span>
                                    <span>{price.finalPrice} руб.</span></p>
                         }
                    </div>
                    <div className="card-action">
                        <button onClick={() => pushInCart({"id":mainId,"name":displayName,"price":price.finalPrice})} className="btn">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}