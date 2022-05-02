import React from 'react';

//Create context object which contains login state
const AuthContext = React.createContext({
    isLoggedIn: false,
    //Add 'dummy' function to onLogout just for autocomplete reference when referencing the AuthContext object.
    onLogout: () => {}
});

export default AuthContext;