import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tag extends Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" onChange={ onChange } value={ value } name={ name }>
          <option value="food">Alimentação</option>
          <option value="recreation">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="mobility">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>

    );
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tag;
