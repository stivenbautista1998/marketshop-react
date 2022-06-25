import React from "react";

const PassRecovery = () => {
    return (
        <div className="wrapper-recovery">
            <header className="header-section-recovery">
                <nav>
                    <img className="logo-icon" src="../assets/icons/logo.svg" alt="logo of the webpage" />
                </nav>
            </header>
            <main>
                <h2 className="recovery-tittle">Password recovery</h2>
                <p className="recovery-text">Inform the email address used to create your account</p>
                <label className="login-section__label" htmlFor="user-txt">Email address</label>
                <input className="general-input login-section__recovery" id="user-txt" placeholder="stivenb1994@gmail.com" type="text" />
                <a href="success-email.html">
                    <button id="login-btn" className="general-button green--btn">
                        Submit
                    </button>
                </a>
                <a href="../" className="general-message-link green__message">Back to log in</a>
            </main>
        </div>
    );
}

export { PassRecovery };