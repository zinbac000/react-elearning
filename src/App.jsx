import Content from 'components/Content/Content';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from 'templates/MainLayout/MainLayout';
// import classes from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout exact path="/" Component={Content} />
    </BrowserRouter>
  );
}

export default App;
