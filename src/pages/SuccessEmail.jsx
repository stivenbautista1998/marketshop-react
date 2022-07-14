import React from 'react';
import { Link } from 'react-router-dom';
import { IconApp } from '@components/IconApp';

import smsIconSvg from '@icons/sms-icon.svg';

const SuccessEmail = () => {
    return (
        <div className="wrapper-recovery">
            <header className="header-section-recovery">
                <nav>
                    <IconApp bigSize={true} />
                </nav>
            </header>
            <main>
                <h2 className="recovery-tittle">Email has been sent!</h2>
                <p className="recovery-text">Please check your inbox for instructions on how to reset the password</p>
                <img className="sms-icon" src={smsIconSvg} alt="image of a letter" />
                <Link to="/login">
                    <button className="general-button green--btn">
                        Login
                    </button>
                </Link>
                <p className="general-message-link grey__message">Didn’t receive the email? </p>
                <Link to="/password-recovery" className="general-message-link green__message">Resend</Link>
            </main>
        </div>
    )
}

export { SuccessEmail };