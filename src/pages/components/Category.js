import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { onChangeOpt } = this.props;
    return (
      <label htmlFor="category">
        Tag:
        <select name="category" id="category" onChange={ (op) => onChangeOpt(op) }>
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }
}

Category.propTypes = {
  onChangeOption: PropTypes.func,
}.isRequired;

export default Category;
