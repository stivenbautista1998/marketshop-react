import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from "@components/GeneralButton";

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const activeField = { backgroundColor: "rgb(247, 247, 247)", paddingLeft: "0.7em" }

const MyAccount = ({ currentUser, editCurrentUserInfo }) => {
    const [ isEditable, setIsEditable ] = useState(false);
    const [ userName, setUsername ] = useState(currentUser.username);
    const [ userEmail, setUserEmail ] = useState(currentUser.email);
    const [ userPassWord, setUserPassWord ] = useState(currentUser.passWord);

    const editAccount = () => {
        if(isEditable) {
            editCurrentUserInfo({
                username: userName,
                email: userEmail,
                passWord: userPassWord,
                image: ""
            });
            setIsEditable(false);
        } else {
            setIsEditable(true);
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        if(name === "username-txt") {
            setUsername(value);
        } else if(name === "email-txt") {
            setUserEmail(value);
        } else if(name === "password-txt") {
            setUserPassWord(value);
        }

        console.log(name, value);
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
                        placeholder="StivenBautista" 
                        value={userName}
                        type="text" 
                    />
                    <label className="login-section__label" htmlFor="email-txt">Email address</label>
                    <input className="general-input login-section__input" 
                        name="email-txt"
                        style={ isEditable ? activeField : null }
                        onChange={onChangeHandler}
                        readOnly={ isEditable ? false : true }
                        placeholder="stivenb1994@gmail.com"
                        value={userEmail}
                        type="text" 
                    />
                    <label className="login-section__label" htmlFor="password-txt">Password</label>
                    <input className="general-input login-section__input" 
                        name="password-txt"
                        style={ isEditable ? activeField : null }
                        onChange={onChangeHandler}
                        readOnly={ isEditable ? false : true }
                        placeholder="************"
                        value={userPassWord}
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