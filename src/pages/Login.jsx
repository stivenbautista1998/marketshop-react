import React, { useRef } from "react";
import { LoginForm } from "@containers/LoginForm";
import { GeneralButton } from "@components/GeneralButton";
import '@styles/components/Login.scss';

import logoSvg from '@icons/logo.svg';

function showMyAccount() {
    console.log("just showMyAccount");
}

const Login = () => {
    const formRef = useRef(null);

    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current); // FormData: native object used to get info from forms easily.
        const data = {
            user: formData.get('user-txt'),
            password: formData.get('password-txt')
        };
        console.log(data);
    };

    return (
        <div className="wrapper-login">
            <div className="section-up">
                <header className="header-section-login">
                    <nav>
                        <img className="logo-icon" src={logoSvg} alt="logo of the webpage" />
                    </nav>
                </header>
                <LoginForm 
                    formRef={formRef} 
                    handlerSubmit={handlerSubmit} 
                />
            </div>
            <div className="section-down">
                <GeneralButton 
                    buttonText="Sign up" 
                    color="white" 
                    clickHandler={showMyAccount} 
                />
            </div>
        </div>
    );
}

export { Login };