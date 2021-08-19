import React from 'react';
import PropTypes from 'prop-types';

class CurrencyCombo extends React.Component {
  render() {
    const { value, handleChange, arrayCurrency } = this.props;
    return (
      <section>
        <label htmlFor="currency">
          Moeda
          <select
            value={ value }
            name="currency"
            id="currency"
            onChange={ handleChange }
          >
            { arrayCurrency.map((item, key) => <option key={ key }>{ item }</option>)}
          </select>

        </label>
      </section>
    );
  }
}

CurrencyCombo.propTypes = {
  arrayCurrency: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default CurrencyCombo;
