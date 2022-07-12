import React from "react";
import { Link } from "react-router-dom";
 
import logoSvg from '@icons/logo.svg';

const PassRecovery = () => {
    return (
        <div className="wrapper-recovery">
            <header className="header-section-recovery">
                <nav>
                    <img className="logo-icon" src={logoSvg} alt="logo of the webpage" />
                </nav>
            </header>
            <main>
                <h2 className="recovery-tittle">Password recovery</h2>
                <p className="recovery-text">Inform the email address used to create your account</p>
                <label className="login-section__label" htmlFor="user-txt">Email address</label>
                <input className="general-input login-section__recovery" id="user-txt" placeholder="stivenb1994@gmail.com" type="text" />
                <Link to="/success-email">
                    <button className="general-button green--btn">
                        Submit
                    </button>
                </Link>
                <Link to="/login" className="general-message-link green__message">Back to log in</Link>
            </main>
        </div>
    );
}

export { PassRecovery };