import React, { Component } from 'react';
import { AutoComplete, Input } from 'antd';

import classes from './AutoCompleteSearch.module.scss';

export default class AutoCompleteSearch extends Component {
  state = {
    options: [],
    dropDownOpen: false,
  };

  timeoutId = null;

  handleCloseDropdown = () => {
    this.setState({
      dropDownOpen: false,
    });
  };

  handleOpenDropdown = () => {
    this.setState({
      dropDownOpen: true,
    });
  };

  render() {
    return (
      <div className={classes.AutoCompleteSearch}>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{
            width: this.props.width,
          }}
          options={this.state.options}
          onSearch={(value) => {
            if (this.timeoutId) {
              clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
              this.props.onFetch(value).then((options) => {
                console.log('fetched data');
                this.setState({
                  options: options.map((value) => ({
                    label: <span key={value}>{value}</span>,
                    value,
                  })),
                });
              });
            }, 300);
          }}
          open={this.state.dropDownOpen}
          onChange={this.handleOpenDropdown}
          onSelect={this.handleCloseDropdown}
          onBlur={this.handleCloseDropdown}
        >
          <Input.Search
            size="large"
            placeholder="Search for categories, courses..."
            enterButton
            onSearch={(value) => {
              this.props.onSearch && this.props.onSearch(value);
              this.handleCloseDropdown();
            }}
          />
        </AutoComplete>
      </div>
    );
  }
}
