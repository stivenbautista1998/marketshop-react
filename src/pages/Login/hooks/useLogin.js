import { useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AppContext from "@context/AppContext";

const useLogin = (validateUser, setCurrentUser) => {
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
            const userInfo = validateUser(data.user, data.password, true);
            if(userInfo) {
                setCurrentUser(userInfo); // set this user as the current one
                getUserCurrentState(userInfo); // get all the state info for that user.
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

    return { formRef, handlerSubmit, showMyAccount };
};

export { useLogin };