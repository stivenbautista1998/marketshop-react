import React from 'react';
import { GeneralButton } from "@components/GeneralButton";

const LoginForm = ({ formRef, handlerSubmit }) => {
    return (
        <main>
            <form className="login-section" action="/" ref={formRef}>
                <label className="login-section__label" htmlFor="user-txt">Email address</label>
                <input className="general-input login-section__input" name="user-txt" type="text" />
                <label className="login-section__label" htmlFor="password-txt">Password</label>
                <input className="general-input login-section__input" name="password-txt" type="password" />
                <div id="js-error-message" className="error-message">Invalid user ID and password combination</div>
                <GeneralButton 
                    buttonText="Log in" 
                    color="green" 
                    clickHandler={handlerSubmit} 
                />
                <a href="./views/pass-recovery.html" className="general-message-link green__message">Forgot my password</a>
            </form>
        </main>
    );
}

export { LoginForm };