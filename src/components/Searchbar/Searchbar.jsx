import '../styles.css';
import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    query: '',
  };
  handleInput = event => {
    this.setState({ query: event.target.value });
  };
  handleFormSUbmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleFormSUbmit}>
          <button type="submit" className="SearchFormButton">
            <BsSearch style={{ width: 20, height: 20 }} />
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleInput}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
