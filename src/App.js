import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

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

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    //Use local storage
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
