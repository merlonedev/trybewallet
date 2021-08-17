import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectTag extends Component {
  render() {
    const { handlerChange, tag } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id={ tag } name="tag" onChange={ handlerChange }>
          <option value="alimentação">Alimentação</option>
          <option value="lazer">Lazer</option>
          <option value="trabalho">Trabalho</option>
          <option value="transporte">Transporte</option>
          <option value="saude">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTag.propTypes = {
  tag: PropTypes.string,
  handlerChange: PropTypes.func,
}.isRequired;
