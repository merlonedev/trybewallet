import React, { Component } from 'react';

class ExpenseDescription extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="input-description">
          Descrição
          <input
            id="input-description"
            placeholder="adicionar a descrição da despesa"
            onChange={ handleChange }
            name="description"
            value={ description }
          />
        </label>
      </div>
    );
  }
}

export default ExpenseDescription;
