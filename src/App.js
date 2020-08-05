import React from 'react';
import classes from './App.module.scss';
import MainLayout from './hoc/MainLayout/MainLayout';

function App() {
  return (
    <div className={classes.App}>
      <MainLayout>This is content</MainLayout>
    </div>
  );
}

export default App;
