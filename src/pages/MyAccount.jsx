import React from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from "@components/GeneralButton";

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
                <form className="main-my-account" action="/">
                    <h2 className="myaccount-tittle">My account Carajo</h2>
                    <label className="login-section__label" htmlFor="name-txt">Username</label>
                    <input className="general-input login-section__input" name="name-txt" readOnly placeholder="StivenBautista" type="text" />
                    <label className="login-section__label" htmlFor="email-txt">Email address</label>
                    <input className="general-input login-section__input" name="email-txt" readOnly placeholder="stivenb1994@gmail.com" type="text" />
                    <label className="login-section__label" htmlFor="password-txt">Password</label>
                    <input className="general-input login-section__input" name="password-txt" readOnly placeholder="************" type="password" />
                </form>
            </div>
            <div className="section-down">
                <GeneralButton
                    buttonText="Edit"
                    color="white"
                    clickHandler={editAccount}
                />
            </div>
        </div>
    );
}


export { MyAccount };