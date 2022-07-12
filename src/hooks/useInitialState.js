import React, { useState, useEffect } from 'react';
import { becomeDollar } from '@helpers/format';

const initialState = {
    cart: [],
    orders: [],
    lastRemoved: [],
    productDetailOpen: null
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);

    console.log(state.orders);

    useEffect(() => {
        removeAllFromCart();
    }, [state.orders]);

    const addToCart = (product) => {
        setState({
            ...state,
            lastRemoved: [],
            cart: [
                ...state.cart,
                product
            ]
        });
    };

    const removeFromCart = ( productToDelete ) => {
        setState({
            ...state,
            lastRemoved: [
                productToDelete
            ],
            cart: state.cart.filter((product) => product.id !== productToDelete.id) // filter returns an array already
        });
    };

    const removeAllFromCart = () => {
        setState({
            ...state,
            cart: []
        });
    }

    const updateProductDetailOpen = ( productInfo ) => {
        setState({
            ...state,
            productDetailOpen: productInfo
        });
    };

    const addOrder = (newOrder) => {
        setState({
            ...state,
            lastRemoved: [
                ...state.cart
            ],
            orders: [
                ...state.orders,
                newOrder
            ]
        });

    };

    const totalSelectedProducts = ( productList ) => {
        const reducerFunction = (accumulator, currentValue) => accumulator + currentValue.price;
        const total = productList.reduce(reducerFunction, 0);
        return becomeDollar(total);
    }

    return {
        state, 
        addToCart,
        removeFromCart,
        updateProductDetailOpen,
        addOrder,
        totalSelectedProducts
    };
}

export { useInitialState };