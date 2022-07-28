import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from "@components/GeneralButton";
import { SyncAlertWithProps } from "@components/SyncAlert";
import AppContext from '../../context/AppContext';
import { useMyAccount } from './hooks/useMyAccount';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const activeField = { backgroundColor: "rgb(247, 247, 247)", paddingLeft: "0.7em" }

const MyAccount = ({ currentUser, editCurrentUserInfo, validateUser, syncAuth, synchronizeCurrentUser }) => {
    const {
        isEditable,
        userName,
        userEmail,
        userPassWord,
        confirmPassword,
        showPassConfirm,
        onChangeHandler,
        editAccount,
        syncUserData
    } = useMyAccount(currentUser, editCurrentUserInfo, validateUser);

    const { setSyncOfCurrentUser } = useContext(AppContext);

    useEffect(() => {
        syncUserData();
    }, [syncAuth]);
    
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
                    <h2 className="myaccount-tittle">My account</h2>
                    <label className="login-section__label" htmlFor="name-txt">Username</label>
                    <input className="general-input login-section__input" 
                        name="username-txt"
                        style={ isEditable ? activeField : null }
                        onChange={onChangeHandler}
                        readOnly={ isEditable ? false : true }
                        placeholder="UserExample"
                        value={userName}
                        type="text" 
                    />
                    <label className="login-section__label" htmlFor="email-txt">Email address</label>
                    <input className="general-input login-section__input" 
                        name="email-txt"
                        style={ isEditable ? activeField : null }
                        onChange={onChangeHandler}
                        readOnly={ isEditable ? false : true }
                        placeholder="explample@gmail.com"
                        value={userEmail}
                        type="text" 
                    />
                    <label className="login-section__label" htmlFor="password-txt">Password</label>
                    <input className="general-input login-section__input" 
                        name="password-txt"
                        style={ isEditable ? activeField : null }
                        onChange={onChangeHandler}
                        readOnly={ isEditable ? false : true }
                        value={userPassWord}
                        type="password"
                    />
                    <label style={ showPassConfirm ? activeField : { display: "none" } }
                        className="login-section__label"
                        htmlFor="repeat-password-txt">
                        Repeat Password
                    </label>
                    <input style={ showPassConfirm ? activeField : { display: "none" } }
                        className="general-input login-section__input" 
                        name="repeat-password-txt"
                        value={confirmPassword}
                        onChange={onChangeHandler}
                        type="password"
                    />
                </form>
            </div>
            <div className="section-down">
                <GeneralButton
                    buttonText={ isEditable ? "Save" : "Edit" }
                    color={ isEditable ? "green" : "white" }
                    clickHandler={editAccount}
                />
            </div>
            <SyncAlertWithProps 
                synchronize={setSyncOfCurrentUser} 
                synchronizeCurrentUser={synchronizeCurrentUser} 
            />
        </div>
    );
}


export { MyAccount };