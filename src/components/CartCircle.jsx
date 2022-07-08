import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

/* let repeated = false;
state.cart.forEach(item => {
    if(item.id === productItem.id) {
        repeated = true;
        console.log(item.id + "===" + productItem.id);
        console.log(productItem);
        console.log(state.cart);
    }
}) */

// if(!repeated) {}

const CartCircle = () => {
    const { state } = useContext(AppContext);

    if(state.cart.length > 0) {
        return (
            <div className="counter-circle">{state.cart.length}</div>
        )
    } else {
        return null;
    }
}

export { CartCircle };