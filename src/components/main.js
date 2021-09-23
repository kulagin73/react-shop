import React,{ useEffect,useContext} from 'react';
import {API_KEY, API_URL} from '../config';
import { Preloader } from './preloader';
import { GoodsList } from './goodsList';
import {Cart} from './cart';
import {BasketList} from './basketList';
import {Toast} from './toast';
import { ShopContext } from '../context';

export const Main = () => {
    
    const {setGoods,loading,isBasketShow,toast,setLoading,showBasket} = useContext(ShopContext);

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
        <main style={{margin:'30px 0'}}>
             {isBasketShow && <BasketList />}
            <Cart onClick={showBasket}/>
            { toast && <Toast />}
            <div className="container2 content">
                {loading ? <Preloader /> : <GoodsList />}
            </div>
        </main>
    )
}