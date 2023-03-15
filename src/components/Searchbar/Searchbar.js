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
      <header className="searchbar">
        <form onSubmit={this.heandleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.heandleChange}
          />
        </form>
      </header>
    );
  }
}
