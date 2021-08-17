import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseAmount extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="input-value">
          Valor
          <input
            id="input-value"
            placeholder="adicionar valor da despesa"
            onChange={ handleChange }
            name="value"
            value={ value }
          />
        </label>
      </div>
    );
  }
}

ExpenseAmount.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default ExpenseAmount;
