import React, { useState } from 'react';

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);

    console.log('############################################');
    console.log(state.cart);
    console.log('############################################');

    const addToCart = (product) => {
        setState({
            ...state,
            cart: [
                ...state.cart,
                product
            ]
        });
    };

    const removeFromCart = ( productToDelete ) => {
        setState({
            ...state,
            cart: state.cart.filter((product) => product.id !== productToDelete.id) // filter returns an array already
        });
    }

    return {
        state, 
        addToCart,
        removeFromCart
    };
}

export { useInitialState };