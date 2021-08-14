import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="tag">
        tag
        <select value={ value } onChange={ onChange } id="tag" name="tag">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}
export default Select;

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
