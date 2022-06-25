import React from 'react';

function showLogin() {
    console.log("show login clicked!");
}

const CreateAccount = () => {
    return (
        <div className="wrapper-login">
            <div className="section-up">
                <header>
                    <nav className="header-home-nav no-fixed">
                        <img className="menu-icon" src="../assets/icons/menu-icon.svg" alt="menu icon" />
                        <a href="/"><img className="logo-icon-small" src="../assets/icons/logo.svg" alt="logo of the webpage" /></a>
                        <img className="shopping-cart" src="../assets/icons/shopping-cart.svg" alt="icon of a shopping cart" />
                    </nav>
                </header>
                <main className="login-section">
                        <h2 className="myaccount-tittle">My account</h2>
                        <label className="login-section__label" htmlFor="name-txt">Name</label>
                        <input className="general-input login-section__input" id="name-txt" placeholder="Elena Lender" type="text" />
                        <label className="login-section__label" htmlFor="email-txt">Email address</label>
                        <input className="general-input login-section__input" id="email-txt" placeholder="elenalender@gmail.com" type="text" />
                        <label className="login-section__label" htmlFor="password-txt">Password</label>
                        <input className="general-input login-section__input" id="password-txt" placeholder="************" type="password" />
                </main>
            </div>
            <div className="section-down">
                <button id="create-account-btn" onClick={showLogin} className="general-button green--btn">
                    Create
                </button>
            </div>
        </div>
    );
}

export { CreateAccount };