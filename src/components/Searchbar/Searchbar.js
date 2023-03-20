import React from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';
export class Searchbar extends React.Component {
  state = {
    value: '',
  };
  heandleChange = evt => {
    this.setState({ value: evt.target.value.trim() });
  };
  heandleSubmit = evt => {
    evt.preventDefault();
    if (!this.state.value) {
      return alert('Enter text');
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <SearchbarStyled className="searchbar">
        <SearchForm onSubmit={this.heandleSubmit} className="form">
          <SearchFormButton type="submit" className="button">
            <span className="button-label">Search</span>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.heandleChange}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
