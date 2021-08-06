import React, { Component } from 'react';

export default class Value extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-value">
          Valor:
          <input id="input-value" type="number" name="name" />
        </label>
      </div>
    );
  }
}
