import React, { useState } from 'react';

const defaultUser = [
    {
        id: "key-12343582774",
        username: "stivenbautista",
        image: "",
        email: "root@gmail.com",
        passWord: "1234567"
    }
];

const useAuth = () => {
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

export { useAuth };