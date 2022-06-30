import React, { useState } from 'react';

const initialState = {
    cart: [],
    lastRemoved: null
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);

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
            lastRemoved: productToDelete,
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