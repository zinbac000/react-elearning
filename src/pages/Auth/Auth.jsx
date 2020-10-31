import React from 'react';
import useAuth from './useAuth';

import SigninForm from './components/SigninForm';
import SignupForm from './components/SignupForm';

import signinImg from 'assets/img/signin.svg';
import signupImg from 'assets/img/signup.svg';
import classes from './Auth.module.scss';
import Logo from 'components/UI/Logo/Logo';
import logo from 'assets/img/logo.svg';

const Auth = () => {
  const auth = useAuth();

  return (
    <section
      className={[
        classes.Auth,
        !auth.mode ? classes.Auth__SignupMode : undefined,
      ].join(' ')}
    >
      <div className={classes.Auth__Logo}>
        <Logo logo={logo} />
      </div>

      <div className={classes.Auth__Wrapper}>
        <div className={classes.Auth__Form}>
          <SigninForm mode={auth.mode} />
          <SignupForm mode={auth.mode} handleToSignin={auth.handleToSignin} />
        </div>
      </div>

      <div className={classes.Auth__PanelsContainer}>
        <div
          className={[classes.Auth__Panel, classes.Auth__PanelLeft].join(' ')}
        >
          <div className={classes.Auth__PanelContent}>
            <h3>New here ?</h3>
            <p>Get an account for free now.</p>
            <button
              className={classes.Auth__PanelBtn}
              onClick={auth.handleToSignup}
            >
              Sign up
            </button>
          </div>
          <img src={signinImg} alt="signin" />
        </div>

        <div
          className={[classes.Auth__Panel, classes.Auth__PanelRight].join(' ')}
        >
          <div className={classes.Auth__PanelContent}>
            <h3>One of us?</h3>
            <p>New course waiting for you now</p>
            <button
              className={classes.Auth__PanelBtn}
              onClick={auth.handleToSignin}
            >
              Sign in
            </button>
          </div>
          <img src={signupImg} alt="signup" />
        </div>
      </div>
    </section>
  );
};

export default Auth;
