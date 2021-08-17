import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCategory extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="input-select-category">
          Tag
          <select
            id="input-select-category"
            placeholder="método de pagamento"
            onChange={ handleChange }
            name="tag"
            value={ tag }
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

SelectCategory.propTypes = {
  handleChange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default SelectCategory;
