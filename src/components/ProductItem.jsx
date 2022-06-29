import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import { capitalizeAll, becomeDollar } from '@helpers/format';

import addToCartSvg from "@icons/add_to_cart.svg";
import selectedCartSvg from "@icons/selected-to-buy.svg";

function showProductDetails(id) {
    console.log("The Id is: " + id);
}

const ProductItem = ({ product }) => {
    const [ isSelected, setIsSelected ] = React.useState(false);
    const { addToCart } = useContext(AppContext);

    let imgUrl = (isSelected ? selectedCartSvg : addToCartSvg);

    function handleProduct() {
        addToCart(product);
        setIsSelected(!isSelected);
    }

    console.log(product.images[0] ? product.images[0] : 'do not have image', product.title);

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