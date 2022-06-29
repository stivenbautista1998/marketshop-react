import React, { useState } from 'react';

const initialState = {
    cart: []
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);

    console.log(state.cart);

    const addToCart = (product) => {
        setState({
            ...state,
            cart: [
                ...state.cart,
                product
            ]
        });
    };

    return {
        state, 
        addToCart 
    };
}

export { useInitialState };