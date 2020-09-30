import React from 'react';
import { AutoComplete, Input } from 'antd';

import classes from './AutoCompleteSearch.module.scss';
import { useState } from 'react';

const AutoCompleteSearch = ({ width, onMobile, onSearch, onFetch }) => {
  const [options, setOptions] = useState([]);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  let timeoutId = null;

  const handleCloseDropdown = () => {
    setDropDownOpen(false);
  };

  const handleOpenDropdown = () => {
    setDropDownOpen(true);
  };
  return (
    <div
      className={[
        classes.AutoCompleteSearch,
        onMobile ? 'onMobile' : 'onDesktop',
      ].join(' ')}
    >
      <AutoComplete
        dropdownMatchSelectWidth={252}
        className={classes.AutoCompleteSearch}
        style={{
          width,
        }}
        options={options}
        onSearch={(value) => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          timeoutId = setTimeout(() => {
            onFetch(value).then((options) => {
              console.log('fetched data');
              setOptions(
                options.map((value) => ({
                  label: <span key={value}>{value}</span>,
                  value,
                })),
              );
            });
          }, 300);
        }}
        open={dropDownOpen}
        onChange={handleOpenDropdown}
        onSelect={handleCloseDropdown}
        onBlur={handleCloseDropdown}
      >
        <Input.Search
          size="large"
          placeholder="Search for categories, courses..."
          enterButton
          onSearch={(value) => {
            onSearch && onSearch(value);
            handleCloseDropdown();
          }}
        />
      </AutoComplete>
    </div>
  );
};

export default AutoCompleteSearch;
