import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from 'templates/MainLayout/MainLayout';
import { AuthLayout } from 'templates/AuthLayout/AuthLayout';

import Home from 'pages/Home/Home';
import Categories from 'pages/Categories/Categories';
import Signin from 'pages/Auth/Signin/Signin';
import Signup from 'pages/Auth/Signup/Signup';

function App() {
  return (
    <Router>
      <AuthLayout exact path="/signin" Component={Signin} />
      <AuthLayout exact path="/signup" Component={Signup} />
      <MainLayout exact path="/categories" Component={Categories} />
      <MainLayout exact path="/" Component={Home} />
    </Router>
  );
}

export default App;
