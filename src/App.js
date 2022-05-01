import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
//Use login context
import AuthContext from './store/auth-context';

function App() {
  //Assume user is not logged in.
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

  const loginHandler = () => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    //Use local storage
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}>
        <MainHeader/>
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
  );
}

export default App;
