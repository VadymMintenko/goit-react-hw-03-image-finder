import React from 'react';

export class Searchbar extends React.Component {
  state = {
    value: '',
  };
  heandleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  heandleSubmit = evt => {
    evt.preventDefault();
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header class="searchbar">
        <form onSubmit={this.heandleSubmit} class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.heandleChange}
          />
        </form>
      </header>
    );
  }
}
