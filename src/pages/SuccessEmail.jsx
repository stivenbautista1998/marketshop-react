import React from 'react';

const SuccessEmail = () => {
    return (
        <div className="wrapper-recovery">
            <header className="header-section-recovery">
                <nav>
                    <img className="logo-icon" src="../assets/icons/logo.svg" alt="logo of the webpage" />
                </nav>
            </header>
            <main>
                <h2 className="recovery-tittle">Email has been sent!</h2>
                <p className="recovery-text">Please check your inbox for instructions on how to reset the password</p>
                <img className="sms-icon" src="../assets/icons/sms-icon.svg" alt="image of a letter" />
                <a href="/">
                    <button id="login-btn" className="general-button green--btn">
                        Login
                    </button>
                </a>
                <p className="general-message-link grey__message">Didn’t receive the email?</p> <a href="pass-recovery.html" className="general-message-link green__message">Resend</a>
            </main>
        </div>
    )
}

export { SuccessEmail };