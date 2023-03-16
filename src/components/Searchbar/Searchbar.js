import React from 'react';

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
