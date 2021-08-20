import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { value, handleChange, description } = this.props;
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
            name="description"
            value={ description }
            onChange={ handleChange }
            maxLength="30"
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
  description: PropTypes.string,
}.isRequired;
