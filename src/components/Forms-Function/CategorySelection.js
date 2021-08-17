import React from 'react';
import PropTypes from 'prop-types';

class CategorySelection extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="Tag">
        Tag
        <select
          id="Tag"
          value={ value }
          name="tag"
          alt="Tag"
          onChange={ handleChange }
        >
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
CategorySelection.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategorySelection;
