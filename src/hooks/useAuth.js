import React, { useState } from 'react';

const defaultUser = [
    {
        id: "user-key-995701412669",
        username: "stivenbautista",
        image: "",
        email: "root@gmail.com",
        passWord: "1234567"
    }
];

const useAuth = () => {
    const [ userInfo, setUserInfo ] = useState(defaultUser);
    const [ currentUser, setCurrentUser ] = useState(null);

    console.log({ userInfo });

    /**
     * @param  {object} newUserInfo
     * Call this function when you want to add a new user.
     */
    const addNewUser = ( newUserInfo ) => {
        setUserInfo([ ...userInfo, newUserInfo ]);
    };
    
    /**
     * @param  {string} email
     * @param  {string} password
     * @return {object}
     * Call this function when you want to authenticate the user,
     * It returns an object with all the user info if it does exist. Otherwise, it will return false.
     */
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