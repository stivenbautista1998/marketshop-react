import { useContext, useRef, useState } from 'react';
import AppContext from "@context/AppContext";
import { generateId } from '@helpers/format';

const useCreateAccount = (validateUser, addNewUser) => {
    const formRef = useRef(null);
    const [ showPassConfirm, setShowPassConfirm ] = useState(false);
    const [ passwordValue, setPasswordValue ] = useState("");
    const { addNewUserStateOrder } = useContext(AppContext);

    function checkNewAccount(event) {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get("username-txt"),
            email: formData.get("email-txt"),
            passWord: formData.get("password-txt"),
            repeatedPassWord: formData.get("repeat-password-txt")
        }
        if(data.username !== "" && data.email !== "" && data.passWord !== "" && data.repeatedPassWord !== "") {
            // validating if the user do not exist
            if(data.passWord === data.repeatedPassWord) {
                if(!validateUser(data.email, "", false)) { // validateUser returns false the user do not exist
                    const newUserId = `user-key-${ generateId() }`;
                    addNewUser({
                        id: newUserId,
                        image: "",
                        username: data.username,
                        email: data.email,
                        passWord: data.passWord
                    }); // I didn't spread the data object to not obtain repeatedPassWord as well.
                    addNewUserStateOrder(newUserId); // create new state order for the new created user.
                    clearForm();
                    console.log("new user successfully created!");
                } else {
                    console.log("the user already exist");
                }
            } else {
                console.log("the password is not the same");
            }
        } else {
            console.log("empty data");
        }
        console.log({ data });
    }

    function passwordOnChangeHandler(event) {
        setPasswordValue(event.target.value);
        if(event.target.value.length > 0) {
            setShowPassConfirm(true);
        } else {
            setShowPassConfirm(false);
        }
    }

    function clearForm() {
        document.getElementById("create-account-form").reset();
        setPasswordValue("");
        setShowPassConfirm(false);
    }

    return { formRef, showPassConfirm, passwordValue, checkNewAccount, passwordOnChangeHandler };
};

export { useCreateAccount };