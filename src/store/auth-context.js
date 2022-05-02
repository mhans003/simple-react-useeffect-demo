import React, { useState, useEffect } from 'react';

//Create context object which contains login state
const AuthContext = React.createContext({
    isLoggedIn: false,
    //Add 'dummy' function to onLogout and onLogin just for autocomplete reference when referencing the AuthContext object.
    onLogout: () => {},
    onLogin: (email, password) => {}
});

//Export entire provider as named export. This contains all logic/state for authentication, using AuthContext Provider.
export const AuthContextProvider = props => {
    //Use state for whether user is logged in.
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //This code needs to be in useEffect so that it doesn't result in infinite re-rendering (only when app starts OR when dependencies change)
    useEffect(() => {
        //Check if user is already 'logged in' based on local storage data
        const storedLogInData = localStorage.getItem('isLoggedIn');

        //If isLoggedIn is set, simply change logged in state in React
        if(storedLogInData === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        //Use local storage
        localStorage.removeItem('isLoggedIn');

        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        //Use local storage
        localStorage.setItem('isLoggedIn', '1');

        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;