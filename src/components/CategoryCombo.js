import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class CategoryCombo extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <section>
        <label htmlFor="tag">
          Tag
          <select
            value={ value }
            name="tag"
            id="tag"
            onChange={ handleChange }
          >
            { categories.map((item, key) => <option key={ key }>{ item }</option>)}
          </select>

        </label>
      </section>
    );
  }
}

CategoryCombo.propTypes = {
  arrayCurrency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default CategoryCombo;
