import React, { Component } from 'react';

import classes from './MainLayout.module.scss';
import Header from '../../components/MainLayout/Header/Header';
import Footer from '../../components/MainLayout/Footer/Footer';

export default class MainLayout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Header transparentOnTop />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
