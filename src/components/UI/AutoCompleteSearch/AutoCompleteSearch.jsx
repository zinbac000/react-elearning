import React from 'react';
import { AutoComplete, Input } from 'antd';

import classes from './AutoCompleteSearch.module.scss';
import { useState } from 'react';
import useToggle from 'Hook/useToggle';

const AutoCompleteSearch = ({ width, screenCls, onSearch, onFetch }) => {
  const [options, setOptions] = useState([]);
  const [dropdown, setDropdownOn, setDropdownOff] = useToggle(false);

  let timeoutId = null;

  const searchHandler = (value) => {
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
  };

  return (
    <div className={[classes.AutoCompleteSearch, screenCls].join(' ')}>
      <AutoComplete
        className={classes.AutoCompleteSearch}
        style={{
          width,
        }}
        dropdownAlign={{ offset: [0, 12] }}
        options={options}
        onSearch={(value) => searchHandler(value)}
        open={dropdown}
        onChange={setDropdownOn}
        onSelect={setDropdownOff}
        onBlur={setDropdownOff}
      >
        <Input.Search
          size="large"
          placeholder="Search for categories, courses..."
          enterButton
          onSearch={(value) => {
            onSearch && onSearch(value);
            setDropdownOff();
          }}
        />
      </AutoComplete>
    </div>
  );
};

export default AutoCompleteSearch;
