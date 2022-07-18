import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';
import { GeneralButton } from '@components/GeneralButton';
import AppContext from "@context/AppContext";
import { generateId } from '@helpers/format';

import menuSvg from "@icons/menu-icon.svg";
import shoppingCartSvg from "@icons/shopping-cart.svg";

const CreateAccount = ({ validateUser, addNewUser }) => {
    const formRef = useRef(null);
    const [ showPassConfirm, setShowPassConfirm ] = useState(false);
    const [ passwordValue, setPasswordValue ] = useState("");
    const { addNewUserStateOrder } = useContext(AppContext);

    function checkNewAccount(event) {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get("username-txt"),
            email: formData.get("email-txt"),
            passWord: formData.get("password-txt"),
            repeatedPassWord: formData.get("repeat-password-txt")
        }
        if(data.username !== "" && data.email !== "" && data.passWord !== "" && data.repeatedPassWord !== "") {
            // validating if the user do not exist
            if(data.passWord === data.repeatedPassWord) {
                if(!validateUser(data.email, "", false)) { // validateUser returns false the user do not exist
                    const newUserId = `user-key-${ generateId() }`;
                    addNewUser({
                        id: newUserId,
                        image: "",
                        username: data.username,
                        email: data.email,
                        passWord: data.passWord
                    }); // I didn't spread the data object to not obtain repeatedPassWord as well.
                    addNewUserStateOrder(newUserId); // create new state order for the new created user.
                    clearForm();
                    console.log("new user successfully created!");
                } else {
                    console.log("the user already exist");
                }
            } else {
                console.log("the password is not the same");
            }
        } else {
            console.log("empty data");
        }
        console.log({ data });
    }

    function passwordOnChangeHandler(event) {
        setPasswordValue(event.target.value);
        if(event.target.value.length > 0) {
            setShowPassConfirm(true);
        } else {
            setShowPassConfirm(false);
        }
    }

    function clearForm() {
        document.getElementById("create-account-form").reset();
        setPasswordValue("");
        setShowPassConfirm(false);
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
                <form id="create-account-form" className="login-section" action="/login" ref={formRef}>
                    <h2 className="myaccount-tittle">Create Account</h2>
                    <label className="login-section__label" htmlFor="name-txt">Username</label>
                    <input className="general-input login-section__input" name="username-txt" placeholder="UserExample" type="text" />
                    <label className="login-section__label" htmlFor="email-txt">Email address</label>
                    <input className="general-input login-section__input" name="email-txt" placeholder="example@gmail.com" type="text" />
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