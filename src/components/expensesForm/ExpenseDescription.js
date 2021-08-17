import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
ExpenseDescription.propTypes = {
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};
export default ExpenseDescription;
