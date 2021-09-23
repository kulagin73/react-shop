export function reducer (state, {type,payload}) {
      switch(type) {
        case 'CLOSE_TOAST':
            return {
                ...state,
                toast:'',
            }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(el => el.id !== payload.id)
            }
        case 'SHOW_BASKET':
            return {
               ...state,
               isBasketShow : !state.isBasketShow
            }
        case 'SET_LOADING':
            return {
               ...state,
               loading : !state.loading
            }
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex((orderItem) => {
                return orderItem.id === payload.id
            })
           
            
            let newOrder = null;
                if (itemIndex < 0) {
                    const newItem = {
                        ...payload,
                        quantity: 1
                    }
                newOrder  = [...state.order,newItem];
                } else {
                    newOrder = state.order.map((orderItem,index) => {
                        if (index === itemIndex) {
                                return {
                                    ...orderItem,
                                    quantity: orderItem.quantity + 1
                                }
                        } else {
                            return orderItem;
                        }
                    });
                }    
                
                return {
                   ...state,
                   order:newOrder,
                   toast:payload.name
                }
            }
        
        case 'UP_QUANTITY': 
            return {
               ...state,
               order: state.order.map((orderItem) => {
                    if (orderItem.id === payload.id) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem;
                    }
                })
            }

        case 'DOWN_QUANTITY': 
            return {
                ...state,
                order : state.order.map((orderItem) => {
                    const newQuantity = orderItem.quantity - 1;
                    if (orderItem.id === payload.id) {
                        return {
                            ...orderItem,
                            quantity: newQuantity >= 1 ? newQuantity : 1,
                        }
                    } else {
                        return orderItem;
                    }       
                })
            }
        case 'SET_GOODS': 
            return {
                ...state,
                goods:payload || [],
                loading:false
            }
        default:
            return state
      }
}