import React from 'react';

const ShoppingCardTab = ({ showShoppingCardTab, shoppingCardRightPosition, refHeader }) => {
    console.log("showing ShoppingCardTab!");

    // checking if the rightPosition given is correct or just a wrong value.
    function isCorrectPosition() {
        if(shoppingCardRightPosition === "0px") {
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
        <div 
            id="js-shopping-card-tab" 
            className={`shopping-card-tab ${showShoppingCardTab ? "menu-active" : ""}`} 
            style={{ right: (isCorrectPosition() ? shoppingCardRightPosition : getRightPosition()) }}>
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