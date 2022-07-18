import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from '@components/GeneralButton';
import AppContext from "@context/AppContext";
import { generateId } from '@helpers/format';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const CreateAccount = ({ validateUser, addNewUser }) => {
    const formRef = useRef(null);
    const { addNewUserStateOrder } = useContext(AppContext);

    function checkNewAccount(event) {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get("username-txt"),
            email: formData.get("email-txt"),
            passWord: formData.get("password-txt")
        }
        if(data.username !== "" && data.email !== "" && data.passWord !== "") {
            // validating if the user do not exist
            if(!validateUser(data.email, data.passWord)) {
                const newUserId = `user-key-${ generateId() }`;
                addNewUser({ id: newUserId, image: "", ...data }); // create new user.
                addNewUserStateOrder(newUserId); // create new state order for the new created user.
            } else {
                console.log("the user already exist");
            }
        } else {
            console.log("empty data");
        }
        console.log({ data });
    }

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
                <form className="login-section" action="/login" ref={formRef}>
                        <h2 className="myaccount-tittle">Create Account</h2>
                        <label className="login-section__label" htmlFor="name-txt">Username</label>
                        <input className="general-input login-section__input" name="username-txt" placeholder="UserExample" type="text" />
                        <label className="login-section__label" htmlFor="email-txt">Email address</label>
                        <input className="general-input login-section__input" name="email-txt" placeholder="example@gmail.com" type="text" />
                        <label className="login-section__label" htmlFor="password-txt">Password</label>
                        <input className="general-input login-section__input" name="password-txt" type="password" />
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