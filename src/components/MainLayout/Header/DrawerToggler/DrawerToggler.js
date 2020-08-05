import React, { Component } from 'react';

import classes from './DrawerToggler.module.scss';

export default class DrawerToggler extends Component {
  render() {
    return (
      <div onClick={this.props.clicked} className={classes.DrawerToggler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
