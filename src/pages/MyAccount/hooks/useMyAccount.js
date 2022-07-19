import { useState } from 'react';

const useMyAccount = (currentUser, editCurrentUserInfo, validateUser) => {
    const [ isEditable, setIsEditable ] = useState(false);
    const [ userName, setUsername ] = useState(currentUser.username);
    const [ userEmail, setUserEmail ] = useState(currentUser.email);
    const [ userPassWord, setUserPassWord ] = useState(currentUser.passWord);
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ showPassConfirm, setShowPassConfirm ] = useState(false);

    const editAccount = () => {
        if(isEditable) {
            // we validate if the password fields are the same or if the password has not been changed. otherwise, won't save changes
            if((userPassWord === confirmPassword) || (userPassWord > 0 && !showPassConfirm)) {
                // if the email is different and already exist then show the message and won't save changes.
                if(userEmail !== currentUser.email && validateUser(userEmail, "", false)) {
                    console.log("email already exist!");
                } else {
                    editCurrentUserInfo({
                        username: userName,
                        email: userEmail,
                        passWord: userPassWord,
                        image: ""
                    });
                    coldFields();
                }
            } else {
                console.log("the password is not the same");
            }
        } else {
            setIsEditable(true);
        }
    }

    const coldFields = () => {
        setIsEditable(false);
        setConfirmPassword("");
        setShowPassConfirm(false);
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if(name === "username-txt") {
            setUsername(value);
        } else if(name === "email-txt") {
            setUserEmail(value);
        } else if(name === "password-txt") {
            setUserPassWord(value);
            if(value.length > 0) {
                setShowPassConfirm(true);
            } else {
                setShowPassConfirm(false);
            }
        } else if(name === "repeat-password-txt") {
            setConfirmPassword(value);
        }
    }

    return {
        isEditable, 
        userName, 
        userEmail, 
        userPassWord, 
        confirmPassword, 
        showPassConfirm, 
        onChangeHandler, 
        editAccount 
    };
};

export { useMyAccount };