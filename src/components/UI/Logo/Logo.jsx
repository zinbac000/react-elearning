import React, { Component } from 'react';

import classes from './Logo.module.scss';

export default class Logo extends Component {
  render() {
    return (
      <div className={classes.Logo}>
        <img src={this.props.logo} alt="logo" />
        <span>Knowcode</span>
      </div>
    );
  }
}
