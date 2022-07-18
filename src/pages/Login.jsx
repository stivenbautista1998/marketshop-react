import React, { useRef, useContext } from 'react';
import { LoginForm } from "@containers/LoginForm";
import { GeneralButton } from "@components/GeneralButton";
import { IconApp } from '@components/IconApp';
import { useNavigate } from "react-router-dom";
import AppContext from "@context/AppContext";

import '@styles/components/Login.scss';

const Login = ({ currentUser, validateUser, setCurrentUser }) => {
    const { getUserCurrentState } = useContext(AppContext);
    const formRef = useRef(null);
    let navigation = useNavigate();

    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current); // FormData: native object used to get info from forms easily.
        const data = {
            user: formData.get('user-txt'),
            password: formData.get('password-txt')
        };
        if(data.user !== "" && data.password !== "") {
            const userInfo = validateUser(data.user, data.password);
            if(userInfo) {
                setCurrentUser(userInfo);
                getUserCurrentState(userInfo);
                navigation("/", { replace: true });
            } else {
                console.log("wrong info!");
            }
        } else {
            console.log("is empty");
        }
        console.log(data);
    };

    function showMyAccount() {
        navigation("/create-account");
    }

    // if the user is logged in, then redirect to the home page.
    if(currentUser) {
        return navigation("/", { replace: true });
    }

    return (
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