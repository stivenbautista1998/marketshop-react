import React from 'react';

function hideProductDetail() {
    console.log("hideProductDetail clicked!");
}

const ProductDetailTab = ({ pDetailRightPosition }) => {
    console.log("showing ProductDetailTab");
    const addedToCard = false;

    function addToShop() {
        addedToCard = !addedToCard;
    }

    return (
        <div id="js-product-detail" className="product-detail-tab" style={{ right: pDetailRightPosition }} >
            <div>
                <div id="js-detail-img" className="new-img product-detail-img">
                    <div className="wrapper-close-btn"></div>
                    <img onClick={hideProductDetail} className="close-icon" src="../assets/icons/x-icon.svg" alt="close icon" />
                    <div className="points-wrapper">
                        <div className="point selected-point"></div>
                        <div className="point"></div>
                        <div className="point"></div>
                    </div>
                </div>
                
                <div className="product-detail-info">
                    <span id="js-detail-price" className="price-product">loading...</span>
                    <h3 id="js-detail-tittle" className="recovery-text">loading...</h3>
                    <p id="js-detail-descrip" className="recovery-text">loading...</p>
                </div>
            </div>
            <div className="product-detail-button">
                <button data-product="" id="js-detail-btn" onClick={addToShop} className="general-button green--btn">
                    <img className="normal--size" src="../assets/icons/shopping-icon.svg" alt="image of shopping car" />
                    <span id="js-detail-btn-text" className="product-detail-button__text">{addedToCard ? "Remove from cart" : "Add to cart" }</span>
                </button>
            </div>
        </div>
    )
}

export { ProductDetailTab };