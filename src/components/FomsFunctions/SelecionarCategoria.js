import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelecionarCategoria extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="teste-categoria">
          Tag
          <select
            id="teste-categoria"
            name="tag"
            value={ tag }
            onChange={ handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelecionarCategoria.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default SelecionarCategoria;
