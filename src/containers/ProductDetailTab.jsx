import React from 'react';
import { becomeDollar } from '../helpers/format';

import shoppingIconSvg from "@icons/shopping-icon.svg";
import xIconSvg from "@icons/x-icon.svg";

const ProductDetailTab = ({ productInfo, closeProductDetailTab, pDetailRightPosition, refHeader }) => {
    const [ showTab, setShowTab ] = React.useState(false);

    React.useEffect(() => {
        console.log(productInfo);
        setTimeout(() => {
            setShowTab(true);
        }, 100);
    }, []);

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

    return (
        <div className={`product-detail-tab ${showTab ? 'show-product-detail' : ''}`} 
            style={{ right: (isCorrectPosition() ? pDetailRightPosition : getRightPosition()) }} >
            <div>
                <div className="new-img product-detail-img" style={{ backgroundImage: `url(${productInfo.product.images[0]})` }}>
                    <div className="wrapper-close-btn"></div>
                    <img onClick={() => closeProductDetailTab(setShowTab)} className="close-icon" src={xIconSvg} alt="close icon" />
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
            </div>
            <div className="product-detail-button">
                <button onClick={() => productInfo.updateProductDetailState(!productInfo.isSelected)} className="general-button green--btn">
                    <img className="normal--size" src={shoppingIconSvg} alt="image of shopping car" />
                    <span className="product-detail-button__text">{productInfo.isSelected ? "Remove from cart" : "Add to cart" }</span>
                </button>
            </div>
        </div>
    )
}

export { ProductDetailTab };