import React from 'react';

const ShoppingCardTab = ({ showShoppingCardTab, shoppingCardRightPosition }) => {
    return (
        <div 
            id="js-shopping-card-tab" 
            className={`shopping-card-tab ${showShoppingCardTab ? "menu-active" : ""}`} 
            style={{ right: shoppingCardRightPosition }}>
            <div id="js-shopping-container-items" className="shopping-card-top"></div> {/* section where insert the items */}
            <div className="shopping-card-bottom">
                <div className="shopping-card-total">
                    <span className="login-section__label shopping-card-total__text">Total</span>
                    <span 
                        id="js-shopping-total" 
                        className="price-product shopping-card-total__price">
                        $ 0.00
                    </span>
                </div>
                <button id="checkout-btn" className="general-button green--btn">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export { ShoppingCardTab };