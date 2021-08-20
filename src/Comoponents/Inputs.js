import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Inputs extends Component {
  render() {
    const { value, description, onChange } = this.props;
    return (
      <>
        <label htmlFor="input-valor">
          Valor:
          <input
            name="value"
            value={ value }
            type="text"
            id="input-valor"
            onChange={ onChange }
          />
        </label>
        <label htmlFor="input-descricao">
          Descrição:
          <input
            name="description"
            value={ description }
            type="text"
            id="input-descricao"
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

Inputs.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
