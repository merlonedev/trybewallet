import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputForms extends Component {
  render() {
    const { value, handlerChange } = this.props;
    return (
      <label htmlFor="balance" value={ value }>
        Valor
        <input
          type="number"
          name="balance"
          value={ value }
          onChange={ handlerChange }
        />
        {balance}
      </label>
    );
  }
}

InputForms.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
