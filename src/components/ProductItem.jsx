import React from 'react';

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

const ProductItem = ({ imgProduct }) => {
    let isSelected = true;
    let infoProduct = "345";
    let imgUrl = (isSelected ? selectedCartSvg : addToCartSvg);

    return (
        <article data-product={infoProduct} className="article-section-item">
            <div onClick={() => showProductDetails(infoProduct)} className="article-section-item__img new-img" style={{backgroundImage: `url(${imgProduct})`}}>
            </div>
            <div className={`article-section-item__content ${isSelected ? 'clickedBtn' : ''}`}>
                <div className="card-text">
                    <span className="grey__message price-product">{becomeDollar(38.25)}</span>
                    <span className="green__message name-product">{capitalizeAll("product name")}</span>
                </div>
                <div className="circle-border"></div>
                <img id={infoProduct} className="add_to_card" onClick={() => addToCardBtn(infoProduct)} src={imgUrl} alt="image of a shopping car" />
            </div>
        </article>
    );
}

export { ProductItem };