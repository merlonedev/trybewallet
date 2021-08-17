import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, handleChange, descricao } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            type="number"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            type="text"
            name="descricao"
            value={ descricao }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Input;
