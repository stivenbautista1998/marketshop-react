import React from 'react';
import { Link } from 'react-router-dom';
import { GeneralButton } from "@components/GeneralButton";

const LoginForm = ({ formRef, handlerSubmit, loginOnChange, passOnChange, errorState }) => {
    return (
        <main>
            <form className="login-section" action="/" ref={formRef}>
                <label 
                    className={`login-section__label ${errorState.email.error ? "red-letters" : "" }`} 
                    htmlFor="user-txt">
                    { errorState.email.text !== "" ? errorState.email.text : "Email address" }
                </label>
                <input 
                    className={`general-input login-section__input ${errorState.email.error ? "red-borders" : "" }`} 
                    onChange={loginOnChange}
                    name="user-txt"
                    type="text"
                />
                <label 
                    className={`login-section__label ${errorState.pass.error ? "red-letters" : "" }`} 
                    htmlFor="password-txt">
                    { errorState.pass.text !== "" ? errorState.pass.text : "Password" }
                </label>
                <input 
                    className={`general-input login-section__input ${errorState.pass.error ? "red-borders" : "" }`} 
                    onChange={passOnChange}
                    name="password-txt"
                    type="password"
                />
                <div 
                    className={`error-message ${ errorState.errorMessage !== "" ? "show-detail-error-message" : "" }`}>
                    { errorState.errorMessage !== "" ? errorState.errorMessage : "" }
                </div>

                <GeneralButton
                    buttonText="Log in" 
                    color="green" 
                    clickHandler={handlerSubmit} 
                />
                <Link to="/password-recovery" className="general-message-link green__message">Forgot my password</Link>
            </form>
        </main>
    );
}

export { LoginForm };