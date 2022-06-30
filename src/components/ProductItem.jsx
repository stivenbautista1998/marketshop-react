import React, { useContext, useEffect } from 'react';
import AppContext from '@context/AppContext';
import { capitalizeAll, becomeDollar } from '@helpers/format';

import addToCartSvg from "@icons/add_to_cart.svg";
import selectedCartSvg from "@icons/selected-to-buy.svg";


const ProductItem = ({ product, setProductDetailTab }) => {
    const [ isSelected, setIsSelected ] = React.useState(false);
    const { state, addToCart, removeFromCart } = useContext(AppContext);

    let imgUrl = (isSelected ? selectedCartSvg : addToCartSvg);


    // when the page is loaded then we check if this product is one of the selected products on the shopping cart tab.
    useEffect(() => {
        state.cart.forEach((productItem) => {
            if(productItem.id === product.id) setIsSelected(true);
        });
    }, []);


    // if lastRemoved is equal to this product id then the product has be unselected.
    useEffect(() => {
        // the first time state.lastRemoved is equal to null .id doesn't exist that's why I use the sign "?."
        if(state.lastRemoved?.id === product.id) setIsSelected(false);
    }, [state.lastRemoved]);


    function handleProduct() {
        if(isSelected) {
            removeFromCart(product);
            setIsSelected(false);
        } else {
            addToCart(product);
            setIsSelected(true);
        }
    }

    return (
        <article className="article-section-item">
            <div onClick={() => setProductDetailTab(product)} className="article-section-item__img new-img" style={{backgroundImage: `url(${product.images[0]})`}}>
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
                <img className="add_to_card" onClick={handleProduct} src={imgUrl} alt="image of a shopping car" />
            </div>
        </article>
    );
}

export { ProductItem };