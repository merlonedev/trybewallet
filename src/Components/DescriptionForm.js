import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DescriptionForm extends Component {
  render() {
    const { handlerChange, description } = this.props;
    return (
      <label htmlFor="description">
        Descrição
        <input type="text" name="description" onChange={ handlerChange } />
        { description }
      </label>
    );
  }
}

DescriptionForm.propTypes = {
  description: PropTypes.string.isRequired,
  handlerChange: PropTypes.func.isRequired,
};
