import { useState } from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    onSubmit(value);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchFormBtn type="submit">
          <GoSearch size="20" />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleInputChange}
        />
      </SearchForm>
    </SearchBarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
