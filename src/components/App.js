import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube,  { baseParams } from '../api/Youtube';

export default class App extends Component {
  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
      </div>
    )
  }
}

