import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const CartCircle = () => {
    const { state  } = useContext(AppContext);
    if(state.cart.length > 0) {
        return (
            <div className="counter-circle">{state.cart.length}</div>
        )
    } else {
        return null;
    }
}

export { CartCircle };