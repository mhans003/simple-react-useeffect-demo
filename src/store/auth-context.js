import React from 'react';

//Create context object which contains login state
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;