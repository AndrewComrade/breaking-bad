import React, { ChangeEvent, useState } from 'react';

import styles from './index.module.sass';

interface SearchProps {
  placeholder?: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const [searchString, setSearchString] = useState('');

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  return (
    <input
      className={styles.SearchInput}
      type='text'
      placeholder={placeholder || ''}
      value={searchString}
      onInput={searchHandler}
    />
  );
};

export default Search;
