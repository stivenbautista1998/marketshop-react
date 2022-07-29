import { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { validateEmail } from '@helpers/validations';
import AppContext from "@context/AppContext";

const defaultErrorState = {
    email: { error: false, text: "" },
    pass: { error: false, text: "" },
    errorMessage: ""
};

const useLogin = (validateUser, setCurrentUser) => {
    const { getUserCurrentState } = useContext(AppContext);
    const [ errorState, setErrorState ] = useState(defaultErrorState);
    const formRef = useRef(null);
    let navigation = useNavigate();

    const handlerSubmit = (event) => {
        event.preventDefault();
        setErrorState(defaultErrorState);
        const formData = new FormData(formRef.current); // FormData: native object used to get info from forms easily.
        const data = {
            user: formData.get('user-txt'),
            password: formData.get('password-txt')
        };
        if(data.user !== "" && data.password !== "") {
            if(validateEmail(data.user)) {
                const userInfo = validateUser(data.user, data.password, true);
                if(userInfo) {
                    setCurrentUser(userInfo); // set this user as the current one
                    getUserCurrentState(userInfo); // get all the state info for that user.
                    navigation("/", { replace: true });
                } else {
                    console.log("wrong user info!");
                    setErrorState({
                        email: { error: true, text: "" },
                        pass: { error: true, text: "" },
                        errorMessage: "Invalid username or password"
                    });
                }
            } else {
                console.log("please provide a valid email.");
                setErrorState({
                    ...errorState,
                    email: { error: true, text: "Enter a valid email address" }
                });
            }
        } else {
            console.log("is empty");
            if(data.user === "" && data.password === "") {
                setErrorState({
                    email: { error: true, text: "" },
                    pass: { error: true, text: "" },
                    errorMessage: "The fields should not be empty."
                });
            } else if(data.user === "") {
                setErrorState({
                    ...errorState,
                    email: { error: true, text: "Email is empty" }
                });
            } else if(data.password === "") {
                setErrorState({
                    ...errorState,
                    pass: { error: true, text: "Password is empty" }
                });
            }
        }
        console.log(data);
    };

    function showMyAccount() {
        navigation("/create-account");
    }

    return { formRef, handlerSubmit, showMyAccount, errorState };
};

export { useLogin };