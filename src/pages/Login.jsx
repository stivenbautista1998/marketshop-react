import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "@containers/LoginForm";
import { GeneralButton } from "@components/GeneralButton";
import { IconApp } from '@components/IconApp';
import { useNavigate } from "react-router-dom";
import '@styles/components/Login.scss';

function showMyAccount() {
    console.log("just showMyAccount");
}

const Login = ({ validateUser, setCurrentUser }) => {
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
                navigation("/", { replace: true });
            } else {
                console.log("wrong info!");
            }
        } else {
            console.log("is empty");
        }
        console.log(data);
    };

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
                <Link to="/create-account">
                    <GeneralButton 
                        buttonText="Sign up" 
                        color="white" 
                        clickHandler={showMyAccount} 
                    />
                </Link>
            </div>
        </div>
    );
}

export { Login };