import React from 'react';
import { Link } from 'react-router-dom';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const MyOrder = () => {
    return (
        <div className="wrapper-login">
            <header className="header-my-order">
                <nav className="header-home-nav nav--my-orders">
                    <img className="menu-icon" src={menuSvg} alt="menu icon" />
                    <Link className="style-no-link" to="/"><h2>My order</h2></Link>
                    <img className="shopping-cart" src={shoppingCartSvg} alt="icon of a shopping cart" />
                </nav>
            </header>
            <main className="my-orders-section">
                <article className="shopping-card-item my-orders__item my-orders__item--special">
                    <div className="part-up">
                        <span className="my-orders__item__date price-product">04.25.2021</span>
                        <span className="my-orders__item__amount">6 articles</span>
                    </div>
                    <div className="back-container part-down">
                        <span className="price-product">$ 560.00</span>
                    </div>
                </article>
                
                <article className="shopping-card-item">
                    <div className="front-container">
                        <div className="image-border" /* style={{ backgroundImage: "url(../assets/img/earphones.jpeg)" }} */></div>
                        <span className="name-product">Earphones</span>
                    </div>
                    <div className="back-container">
                        <span className="price-product">$125.00</span>
                    </div>
                </article>
                <article className="shopping-card-item">
                    <div className="front-container">
                        <div className="image-border" /* style={{ backgroundImage: "url(../assets/img/others7.jpeg)" }} */></div>
                        <span className="name-product">Silver Ring</span>
                    </div>
                    <div className="back-container">
                        <span className="price-product">$478,00</span>
                    </div>
                </article>
                <article className="shopping-card-item">
                    <div className="front-container">
                        <div className="image-border" /* style={{ backgroundImage: "url(../assets/img/furniture5.jpeg)" }} */></div>
                        <span className="name-product">Book Table</span>
                    </div>
                    <div className="back-container">
                        <span className="price-product">$43,00</span>
                    </div>
                </article>
                <article className="shopping-card-item">
                    <div className="front-container">
                        <div className="image-border" /* style={{ backgroundImage: "url(../assets/img/clothes12.jpeg)" }} */></div>
                        <span className="name-product">Pink Casual Outfit</span>
                    </div>
                    <div className="back-container">
                        <span className="price-product">$89,00</span>
                    </div>
                </article>
                <article className="shopping-card-item">
                    <div className="front-container">
                        <div className="image-border" /* style={{ backgroundImage: "url(../assets/img/clothes7.jpeg)" }} */></div>
                        <span className="name-product">General Suit</span>
                    </div>
                    <div className="back-container">
                        <span className="price-product">$102,00</span>
                    </div>
                </article>
            </main>
        </div>
    )
}

export { MyOrder };