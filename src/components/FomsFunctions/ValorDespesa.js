import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ValorDespesa extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="teste-despesa">
          Valor
          <input
            id="teste-despesa"
            placeholder="adicionar valor da despesa"
            name="value"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

ValorDespesa.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ValorDespesa;
