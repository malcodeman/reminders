import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    value: ""
  };
  onInputChange = event => {
    this.setState({ value: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
