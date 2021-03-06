import React from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from '@components/GeneralButton';
import { useCreateAccount } from './hooks/useCreateAccount';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const CreateAccount = ({ validateUser, addNewUser }) => {
    const {
        formRef,
        showPassConfirm,
        passwordValue,
        checkNewAccount,
        passwordOnChangeHandler
    } = useCreateAccount(validateUser, addNewUser);

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
                <form id="create-account-form" className="login-section" action="/login" ref={formRef}>
                    <h2 className="myaccount-tittle">Create Account</h2>
                    <label className="login-section__label" htmlFor="name-txt">Username</label>
                    <input className="general-input login-section__input" 
                        name="username-txt" 
                        placeholder="UserExample" 
                        type="text" 
                    />
                    <label className="login-section__label" htmlFor="email-txt">Email address</label>
                    <input className="general-input login-section__input" 
                        name="email-txt" 
                        placeholder="example@gmail.com" 
                        type="text" 
                    />
                    <label className="login-section__label" htmlFor="password-txt">Password</label>
                    <input className="general-input login-section__input" 
                        onChange={passwordOnChangeHandler}
                        value={passwordValue}
                        name="password-txt" 
                        type="password"
                    />
                    <label style={ showPassConfirm ? null : { display: "none" } } 
                        className="login-section__label" 
                        htmlFor="repeat-password-txt">
                        Repeat Password
                    </label>
                    <input style={ showPassConfirm ? null : { display: "none" } } 
                        className="general-input login-section__input" 
                        name="repeat-password-txt" 
                        type="password" 
                    />
                </form>
            </div>
            <div className="section-down">
                <GeneralButton 
                    buttonText="Create"
                    color="green" 
                    clickHandler={checkNewAccount} 
                />
            </div>
        </div>
    );
}

export { CreateAccount };