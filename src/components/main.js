import React,{useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import { Preloader } from './preloader';
import { GoodsList } from './goodsList';
import {Cart} from './cart';
import {BasketList} from './basketList';

export const Main = () => {
    const [goods,setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order,setOrder] = useState([]);
    const [idBasketShow,setShowBasket] = useState(false);

    const showBasket = () => {
        setShowBasket(!idBasketShow);
    }
    
    const removeFromBasket = (id) => {
       const newOrder = order.filter(el => el.id !== id);
       setOrder(newOrder);
    }

    const downQuantity = (id) => {
        let newOrder = order.map((orderItem) => {
            const newQuantity = orderItem.quantity - 1;
            if (orderItem.id === id) {
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return orderItem;
            }       
        })
        newOrder = newOrder.filter(el => el.quantity !== 0);
        setOrder(newOrder);
     }

     const upQuantity = (id) => {
        const newOrder = order.map((orderItem) => {
            if (orderItem.id === id) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else {
                return orderItem;
            }
        })
        setOrder(newOrder);
     }
    
    const pushInCart = (item) => {
        
        const itemIndex = order.findIndex((orderItem) => {
            return orderItem.id === item.id
        })
        
        if (itemIndex < 0) {
            let newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else {
           const newOrder = order.map((orderItem,index) => {
               if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
               } else {
                   return orderItem;
               }
           })
           setOrder(newOrder);
        }      
    }

    useEffect(() => {
        fetch(API_URL, {
            method:'GET',
            headers:{
                'Authorization': API_KEY,
            }
        })
        .then(response => response.json())
        .then(data => setGoods(data.shop))
        setLoading(false);
    },[])
    

    return (
        <main>
             {idBasketShow && <BasketList order={order} showBasket={showBasket} removeFromBasket={removeFromBasket} downQuantity={downQuantity} upQuantity={upQuantity} />}
            <Cart quantity={order.length} showBasket={showBasket} />
            <div className="container2 content">
                {loading ? <Preloader /> : <GoodsList goods={goods} pushInCart={pushInCart}/>}
            </div>
        </main>
    )
}