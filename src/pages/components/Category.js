import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { onChangeOpt } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag" onChange={ (op) => onChangeOpt(op) }>
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
  onChangeOp: PropTypes.func,
}.isRequired;

export default Category;
