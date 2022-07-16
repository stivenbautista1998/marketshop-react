import React, { useState } from 'react';

const defaultUser = [
    {
        username: "stivenbautista",
        image: "",
        email: "root@gmail.com",
        passWord: "1234567"
    }
];

const useUser = () => {
    const [ userInfo, setUserInfo ] = useState(defaultUser);
    const [ currentUser, setCurrentUser ] = useState(null);

    const addNewUser = ( newUserInfo ) => {
        setUserInfo(newUserInfo);
    };

    const validateUser = ( email, password ) => {
        let authentic = false;
        userInfo.forEach((user) => {
            if(user.email === email && user.passWord === password) {
                authentic = user;
            }
        });
        return authentic;
    };
    
    return { userInfo, currentUser, setCurrentUser, validateUser, addNewUser };
};

export { useUser };