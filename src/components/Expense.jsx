import React, { Component } from 'react';

class Expense extends Component {
  render() {
    return (
      <label htmlFor="category">
        Tag:
        <select type="text" name="category" id="category">
          <option value="food">Alimentação</option>
          <option value="fun">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default Expense;
