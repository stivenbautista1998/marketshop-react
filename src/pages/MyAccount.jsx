import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from "@components/GeneralButton";

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const activeField = { backgroundColor: "rgb(247, 247, 247)", paddingLeft: "0.7em" }

const MyAccount = ({ currentUser, editCurrentUserInfo, validateUser }) => {
    const [ isEditable, setIsEditable ] = useState(false);
    const [ userName, setUsername ] = useState(currentUser.username);
    const [ userEmail, setUserEmail ] = useState(currentUser.email);
    const [ userPassWord, setUserPassWord ] = useState(currentUser.passWord);
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ showPassConfirm, setShowPassConfirm ] = useState(false);

    const editAccount = () => {
        if(isEditable) {
            // we validate if the password fields are the same or if the password has not been changed. otherwise, won't save changes
            if((userPassWord === confirmPassword) || (userPassWord > 0 && !showPassConfirm)) {
                // if the email is different and already exist then show the message and won't save changes.
                if(userEmail !== currentUser.email && validateUser(userEmail, "", false)) {
                    console.log("email already exist!");
                } else {
                    editCurrentUserInfo({
                        username: userName,
                        email: userEmail,
                        passWord: userPassWord,
                        image: ""
                    });
                    coldFields();
                }
            } else {
                console.log("the password is not the same");
            }
        } else {
            setIsEditable(true);
        }
    }

    const coldFields = () => {
        setIsEditable(false);
        setConfirmPassword("");
        setShowPassConfirm(false);
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if(name === "username-txt") {
            setUsername(value);
        } else if(name === "email-txt") {
            setUserEmail(value);
        } else if(name === "password-txt") {
            setUserPassWord(value);
            if(value.length > 0) {
                setShowPassConfirm(true);
            } else {
                setShowPassConfirm(false);
            }
        } else if(name === "repeat-password-txt") {
            setConfirmPassword(value);
        }
    }
    
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
        </div>
    );
}


export { MyAccount };