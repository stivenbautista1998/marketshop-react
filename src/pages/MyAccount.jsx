import React from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const editAccount = () => {
    console.log("editAccount function clicked!!");
}

const MyAccount = () => {
    return (
        <div className="wrapper-login">
            <div className="section-up">
                <header className="box-shadow-header">
                    <nav className="header-home-nav no-fixed">
                        <img className="menu-icon" src={menuSvg} alt="menu icon" />
                        <Link className="style-no-link" to="/">
                            <IconApp />
                        </Link>
                        <img className="shopping-cart" src={shoppingCartSvg} alt="icon of a shopping cart" />
                    </nav>
                </header>
                <main className="main-my-account">
                        <h2 className="myaccount-tittle">My account</h2>
                        <label className="login-section__label" htmlFor="name-txt">Name</label>
                        <input className="general-input login-section__input" id="name-txt" readOnly placeholder="Stiven Bautista" type="text" />
                        <label className="login-section__label" htmlFor="email-txt">Email address</label>
                        <input className="general-input login-section__input" id="email-txt" readOnly placeholder="stivenb1994@gmail.com" type="text" />
                        <label className="login-section__label" htmlFor="password-txt">Password</label>
                        <input className="general-input login-section__input" id="password-txt" readOnly placeholder="************" type="password" />
                </main>
            </div>
            <div className="section-down">
                <button onClick={editAccount} className="general-button white--btn">
                    Edit
                </button>
            </div>
        </div>
    );
}


export { MyAccount };