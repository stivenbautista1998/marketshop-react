import React, { useState, useEffect, useContext } from 'react';
import AppContext from '@context/AppContext';
import { becomeDollar } from '../helpers/format';

import addShopCartSvg from "@icons/add-cart.svg";
import removeShopCartSvg from "@icons/remove-cart.svg";
import xIconSvg from "@icons/x-icon.svg";

const ProductDetailTab = ({ productInfo, closeProductDetailTab, pDetailRightPosition, refHeader }) => {
    const [ showTab, setShowTab ] = useState(false);    
    const [ productSelected, setProductSelected ] = useState(productInfo.isSelected);
    const { addToCart, removeFromCart, updateProductDetailOpen } = useContext(AppContext);

    const iconSelected = (productSelected ? removeShopCartSvg : addShopCartSvg);

    useEffect(() => {
        setTimeout(() => {
            setShowTab(true);
        }, 100);
    }, []);

    // every time the a new product is selected and the ProductDetailTab is active, then update the product selection
    useEffect(() => {
        setProductSelected(productInfo.isSelected);
        updateProductDetailOpen(productInfo.product);
    }, [productInfo.product.id]);


    function isCorrectPosition() {
        if(pDetailRightPosition === "0px") {
            if(window.innerWidth < 500) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    // getting the right value (normally it does it for larger devices like desktop etc.)
    function getRightPosition() {
        if(refHeader.current !== undefined) {
            if(window.innerWidth >= 1187) {
                const shoppingTabMarginRight = (window.innerWidth - refHeader.current.offsetWidth) / 2;
                return shoppingTabMarginRight + "px";
            }
        } else {
            return "0px";
        }
    }

    function updateProductSelection() {
        if(productSelected) {
            removeFromCart(productInfo.product);
            setProductSelected(false);
        } else {
            addToCart(productInfo.product);
            setProductSelected(true);
        }
    }

    return (
        <div className={`product-detail-tab ${showTab ? 'show-product-detail' : ''}`} 
            style={{ right: (isCorrectPosition() ? pDetailRightPosition : getRightPosition()) }} >
            <div>
                <div className="new-img product-detail-img" style={{ backgroundImage: `url(${productInfo.product.images[0]})` }}>
                    <div className="wrapper-close-btn"></div>
                    <img onClick={() => closeProductDetailTab(setShowTab, updateProductDetailOpen)} className="close-icon" src={xIconSvg} alt="close icon" />
                    <div className="points-wrapper">
                        <div className="point selected-point"></div>
                        <div className="point"></div>
                        <div className="point"></div>
                    </div>
                </div>
                
                <div className="product-detail-info">
                    <span className="price-product">{becomeDollar(productInfo.product.price)}</span>
                    <h3 className="recovery-text">{productInfo.product.title}</h3>
                    <p className="recovery-text">{productInfo.product.description}</p>
                </div>
                <div>
                    {productInfo.wrongSelection ? 'The tab is open' : ''}
                </div>
            </div>
            <div className="product-detail-button">
                <button onClick={updateProductSelection} className="general-button green--btn">
                    <img className="normal--size" src={iconSelected} alt="image of shopping car" />
                    <span className="product-detail-button__text">{productSelected ? "Remove from cart" : "Add to cart" }</span>
                </button>
            </div>
        </div>
    )
}

export { ProductDetailTab };