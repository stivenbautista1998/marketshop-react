import React from "react";
import '../styles/components/Login.scss';

function showMyAccount() {
    console.log("just a test");
}

const Login = () => {
    return (
        <div className="wrapper-login">
            <div className="section-up">
                <header className="header-section-login">
                    <nav>
                        <img className="close-icon" src="./assets/icons/x-icon.svg" alt="close icon" />
                        <img className="logo-icon" src="./assets/icons/logo.svg" alt="logo of the webpage" />
                    </nav>
                </header>
                <main className="login-section">
                        <label className="login-section__label" htmlFor="user-txt">Email address</label>
                        <input className="general-input login-section__input" id="js-user-txt" type="text" />
                        <label className="login-section__label" htmlFor="password-txt">Password</label>
                        <input className="general-input login-section__input" id="js-password-txt" type="password" />
                        <div id="js-error-message" className="error-message">Invalid user ID and password combination</div>
                        <button id="login-btn" className="general-button green--btn">
                            Log in
                        </button>
                        <a href="./views/pass-recovery.html" className="general-message-link green__message">Forgot my password</a>
                </main>
            </div>
            <div className="section-down">
                <button id="singup-btn" onClick={() => showMyAccount()} className="general-button white--btn">
                    Sign up
                </button>
            </div>
        </div>
    );
}

export { Login };