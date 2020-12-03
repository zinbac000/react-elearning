import React from 'react';
import { AutoComplete, Input } from 'antd';

import classes from './AutoCompleteSearch.module.scss';
import { useState } from 'react';
import useToggle from 'CustomHook/useToggle';

const AutoCompleteSearch = ({ onSearch, onFetch }) => {
  const [options, setOptions] = useState([]);
  const [dropdown, setDropdownOn, setDropdownOff] = useToggle(false);

  let timeoutId = null;

  const searchHandler = (value) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      onFetch(value).then((_options) => {
        setOptions(
          _options.map(({ maKhoaHoc, tenKhoaHoc }) => ({
            label: <span key={maKhoaHoc}>{tenKhoaHoc}</span>,
            value: maKhoaHoc,
          })),
        );
      });
    }, 400);
  };

  return (
    <div className={[classes.AutoCompleteSearch].join(' ')}>
      <AutoComplete
        dropdownAlign={{ offset: [0, 12] }}
        options={options}
        onSearch={(value) => searchHandler(value)}
        open={dropdown}
        onChange={setDropdownOn}
        onSelect={(value) => {
          onSearch();
          setDropdownOff();
        }}
        onBlur={setDropdownOff}
        allowClear={true}
        notFoundContent
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
