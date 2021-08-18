import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DescricaoDespesa extends Component {
  render() {
    const { description, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="teste-descricao">
          Descrição
          <input
            id="teste-descricao"
            placeholder="adicionar descriçao da despesa"
            name="description"
            value={ description }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

DescricaoDespesa.propTypes = {
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,

};
export default DescricaoDespesa;
