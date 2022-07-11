import React, { useState, useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import { capitalizeAll, becomeDollar } from '@helpers/format';

import addToCartSvg from "@icons/add_to_cart.svg";
import selectedCartSvg from "@icons/selected-to-buy.svg";


const ProductItem = ({ product, setProductDetailTab }) => {
    const [ isSelected, setIsSelected ] = useState(false);
    const [ wrongSelectionCounter, setWrongSelectionCounter ] = useState(0);
    const { state, addToCart } = useContext(AppContext); // removeFromCart


    let imgUrl = (isSelected ? selectedCartSvg : addToCartSvg);

    // when the page is loaded then we check if this product is one of the selected products on the shopping cart tab.
    useEffect(() => {
        state.cart.forEach((productItem) => {
            if(productItem.id === product.id) setIsSelected(true);
        });
    }, [state.cart]);


    // if lastRemoved is equal to this product id then the product has be unselected.
    useEffect(() => {
        // the first time state.lastRemoved is equal to null .id doesn't exist that's why I use the sign "?."
        if(state.lastRemoved?.id === product.id) setIsSelected(false);
    }, [state.lastRemoved]);


    // it updates the product selection state, receiving the new selection value 
    // and the info about if the it comes from the component or outside.
    function selectProduct() {
        if(isSelected !== true) {
            if(state.productDetailOpen?.id !== product.id) {
                addToCart(product);
                setProductDetailTab({ product, isSelected: true, showDetailTab: false, wrongSelectionCounter: 0 });
                if(wrongSelectionCounter !== 0) setWrongSelectionCounter(0);
            } else {
                setProductDetailTab({ product, isSelected: true, showDetailTab: false, wrongSelectionCounter: wrongSelectionCounter + 1 });
                setWrongSelectionCounter(wrongSelectionCounter + 1);
            }
        }
    }

    function openDetailTab() {        
        setProductDetailTab({ product, isSelected, showDetailTab: true, wrongSelectionCounter: 0 });
        if(wrongSelectionCounter !== 0) setWrongSelectionCounter(0);
    }

    return (
        <article className="article-section-item">
            <div onClick={openDetailTab} 
                className="article-section-item__img new-img" 
                style={{backgroundImage: `url(${product.images[0]})`}}>
            </div>
            <div className={`article-section-item__content ${isSelected ? 'clickedBtn' : ''}`}>
                <div className="card-text">
                    <span className="grey__message price-product">
                        {becomeDollar(product.price)}
                    </span>
                    <span className="green__message name-product">
                        {capitalizeAll(product.title)}
                    </span>
                </div>
                <div className="circle-border"></div>
                <img className="add_to_card" onClick={selectProduct} src={imgUrl} alt="image of a shopping car" />
            </div>
        </article>
    );
}

export { ProductItem };