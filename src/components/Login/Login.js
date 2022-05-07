import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

//Define reducer functions in orer to reference within useReducer rather than using anonymous function directly in useReducer
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.val, 
      isValid: action.val.includes('@')
    };
  }
  if(action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }
  return {
    value: '', 
    isValid: false
  };
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return {
      value: action.val, 
      isValid: action.val.trim().length > 6
    };
  }
  if(action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }
  return {
    value: '',
    isValid: false
  };
};

const Login = () => {
  //Set state for form validity overall 
  const [formIsValid, setFormIsValid] = useState(false);

  //Define email state using useReducer (groups value and validity)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false
  });

  //Define password state using useReducer (groups value and validity)
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false
  });

  //Use context to refer to login state for app
  const authCtx = useContext(AuthContext);

  //Create references to email/password input fields.
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //Destructure just the validity state for password and email; Used for dependency in useEffect when validity changes.
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  //Use useEffect to validate form (cannot be sumbitted if not valid) again when password or email changes
  useEffect(() => {
    //Only check form validity if there is a 500 ms pause between keystrokes
    const identifier = setTimeout(() => {
      setFormIsValid(
        //Both email and password must be valid for form to be valid.
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    //Use clean up function to run before next execution
    return () => {
      //Prevent setFormIsValid from running from last iteration.
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //If the form is valid, allow button to submit.
    if(formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if(!emailIsValid) {
      //If email isn't valid, focus the email input.
      emailInputRef.current.focus();
    } else {
      //Otherwise, focus password input
      passwordInputRef.current.focus();
    }
    //Set the login state at the level of the app (using Context).
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email" 
          label="E-Mail" 
          type="email" 
          isValid={emailIsValid} 
          value={emailState.value} 
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input 
          ref={passwordInputRef}
          id="password" 
          label="Password" 
          type="password" 
          isValid={passwordIsValid} 
          value={passwordState.value} 
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
