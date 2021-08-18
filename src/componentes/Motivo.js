import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Motivo extends Component {
  render() {
    const { handleChange } = this.props;
    const motivos = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <label htmlFor="motivo">
        Tag
        <select name="tag" id="motivo" onChange={ handleChange }>
          { motivos.map((motivo, index) => (
            <option value={ motivo } key={ index }>
              { motivo }
            </option>))}
        </select>
      </label>
    );
  }
}

Motivo.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Motivo;
