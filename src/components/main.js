import React,{useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import { Preloader } from './preloader';
import { GoodsList } from './goodsList';
import {Cart} from './cart';

export const Main = () => {
    const [goods,setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order,setOrder] = useState([]);
    
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

    console.log(order);

    return (
        <main>
            <Cart quantity={order.length}/>
            <div className="container2 content">
                {loading ? <Preloader /> : <GoodsList goods={goods} pushInCart={pushInCart}/>}
            </div>
        </main>
    )
}