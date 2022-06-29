import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

import addToCartSvg from "@icons/add_to_cart.svg";
import selectedCartSvg from "@icons/selected-to-buy.svg";

function showProductDetails(id) {
    console.log("The Id is: " + id);
}

function capitalizeAll(str) {
    let arrWords = str.split(" "), result = "";
    for(let i in arrWords) {
        const lower = arrWords[i].toLowerCase();
        result += arrWords[i].charAt(0).toUpperCase() + lower.slice(1) + (arrWords.length - 1 != i ? " " : "");
    }
    return result;
}

function becomeDollar(value) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(value);  
}

const ProductItem = ({ product }) => {
    //  name, price, imgProduct
    const [ isSelected, setIsSelected ] = React.useState(false);
    const { addToCart } = useContext(AppContext);

    let imgUrl = (isSelected ? selectedCartSvg : addToCartSvg);

    function handleProduct() {
        addToCart(product);
        setIsSelected(!isSelected);
    }

    return (
        <article className="article-section-item">
            <div onClick={() => showProductDetails(infoProduct)} className="article-section-item__img new-img" style={{backgroundImage: `url(${product.images[0]})`}}>
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