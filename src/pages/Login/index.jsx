import React from 'react';
import { CustomHelmet } from "@components/CustomHelmet";
import { LoginForm } from "@containers/LoginForm";
import { GeneralButton } from "@components/GeneralButton";
import { IconApp } from '@components/IconApp';
import { useLogin } from './hooks/useLogin';

import '@styles/components/Login.scss';

const Login = ({ validateUser, setCurrentUser }) => {
    const { formRef, handlerSubmit, showMyAccount, loginOnChange, passOnChange, errorState } = useLogin(validateUser, setCurrentUser);

    return (
        <>
            <CustomHelmet title="Marketshop - Login" />
            <div className="wrapper-login">
                <div className="section-up">
                    <header className="header-section-login">
                        <nav>
                            <IconApp bigSize={true} />
                        </nav>
                    </header>
                    <LoginForm
                        formRef={formRef}
                        handlerSubmit={handlerSubmit}
                        loginOnChange={loginOnChange}
                        passOnChange={passOnChange}
                        errorState={errorState}
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
        </>
    );
}

export { Login };