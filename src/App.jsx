import Home from 'pages/Home/Home';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from 'templates/MainLayout/MainLayout';
// import classes from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout exact path="/" Component={Home} />
    </BrowserRouter>
  );
}

export default App;
