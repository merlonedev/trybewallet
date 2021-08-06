import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <label htmlFor="description">
        Descrição:
        <input
          name="description"
          type="text"
          id="description"
        />
      </label>
    );
  }
}

export default Description;
