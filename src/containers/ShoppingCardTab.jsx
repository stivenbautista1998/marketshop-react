import React, { useContext, useId } from 'react';
import AppContext from '../context/AppContext';
import { ProductOrdered } from '../components/ProductOrdered';
import { becomeDollar } from '@helpers/format';

import noShopSvg from '@icons/no-shop.svg';

const NoProductSelected = () => (
    <img className="no-shop-icon" src={noShopSvg} alt="image of shopping car" />
);

const ShoppingCardTab = ({ showShoppingCardTab, shoppingCardRightPosition, refHeader }) => {
    const { state, removeFromCart, addOrder } = useContext(AppContext);

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

    function totalSelectedProducts() {
        const reducerFunction = (accumulator, currentValue) => accumulator + currentValue.price;
        const total = state.cart.reduce(reducerFunction, 0);
        return becomeDollar(total);
    }

    function generateId() {
        return parseInt(Date.now() * (Math.random() * 10));
    }

    function buyOrder() {
        const currentDate = new Date();
        addOrder({
            id: `key-order-${ generateId() }`,
            date: `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`,
            productsOrdered: [
                ...state.cart
            ]
        });

        console.log("ORDER! COMPLETED!");
    }

    return (
        <div className={`shopping-card-tab ${showShoppingCardTab ? "menu-active" : ""}`} 
            style={{ right: (isCorrectPosition() ? shoppingCardRightPosition : getRightPosition()) }}>

            <div className="shopping-card-top">
                {state.cart.map((product) => (
                    <ProductOrdered
                        key={product.id}
                        productInfo={product}
                        deleteItem={() => removeFromCart(product)}
                    />
                ))}
                {state.cart.length === 0 && <NoProductSelected />}
            </div>

            <div className="shopping-card-bottom">
                <div className="shopping-card-total">
                    <span className="login-section__label shopping-card-total__text">Total</span>
                    <span className="price-product shopping-card-total__price">
                        {totalSelectedProducts()}
                    </span>
                </div>
                <button className="general-button green--btn" onClick={buyOrder}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export { ShoppingCardTab };