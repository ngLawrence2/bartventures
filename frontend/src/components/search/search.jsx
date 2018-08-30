import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Search = ({ budget, location }) => (
  <div>
      <h5>Enter your budget and current location</h5>
      <label>Budget
        <input
          type="text"
          placeholder="Budget"
          ></input>
      </label>
      <label>Location
        <input
          type="text"
          placeholder="Location"
          ></input>
      </label>
        <input
          type="button"
          value="Search"
          ></input>
  </div>
);


export default Search;
