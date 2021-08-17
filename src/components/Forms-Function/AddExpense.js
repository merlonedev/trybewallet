import React from 'react';
import PropTypes from 'prop-types';

class AddExpense extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          name="value"
          value={ value }
          placeholder="Acrescente o valor de sua despesa"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddExpense.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddExpense;
