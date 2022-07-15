import React from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

function showLogin() {
    console.log("show login clicked!");
}

const CreateAccount = () => {
    return (
        <div className="wrapper-login">
            <div className="section-up">
                <header className="box-shadow-header">
                    <nav className="header-home-nav no-fixed">
                        <img className="menu-icon" src={menuSvg} alt="menu icon" />
                        <Link className="no-underline" to="/login">
                            <IconApp />
                        </Link>
                        <img className="shopping-cart" src={shoppingCartSvg} alt="icon of a shopping cart" />
                    </nav>
                </header>
                <main className="login-section">
                        <h2 className="myaccount-tittle">My account</h2>
                        <label className="login-section__label" htmlFor="name-txt">Name</label>
                        <input className="general-input login-section__input" id="name-txt" placeholder="Elena Lender" type="text" />
                        <label className="login-section__label" htmlFor="email-txt">Email address</label>
                        <input className="general-input login-section__input" id="email-txt" placeholder="elenalender@gmail.com" type="text" />
                        <label className="login-section__label" htmlFor="password-txt">Password</label>
                        <input className="general-input login-section__input" id="password-txt" placeholder="************" type="password" />
                </main>
            </div>
            <div className="section-down">
                <button onClick={showLogin} className="general-button green--btn">
                    Create
                </button>
            </div>
        </div>
    );
}

export { CreateAccount };