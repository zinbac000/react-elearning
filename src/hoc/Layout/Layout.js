import React, { Component } from 'react';

import classes from './Layout.module.scss';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

export default class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        {/* SideDrawer */}
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
