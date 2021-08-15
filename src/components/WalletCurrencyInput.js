import React from 'react';
import propTypes from 'prop-types';

class WalletCurrencyInput extends React.Component {
  render() {
    const { currencies, handleChange } = this.props;
    const listaMoedas = Object.keys(currencies);
    const currencyFiltered = listaMoedas
      .filter((item) => item !== 'USDT' && item !== 'DOGE');
    return (
      <label htmlFor="moeda">
        Moeda&nbsp;
        <select
          type="text"
          id="moeda"
          name="currency"
          onChange={ handleChange }
        >
          { currencyFiltered
            .map((item) => <option key={ item }>{item}</option>) }
        </select>
      </label>
    );
  }
}

WalletCurrencyInput.propTypes = {
  handleChange: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.object).isRequired,
};

export default WalletCurrencyInput;
