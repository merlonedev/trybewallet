import React from 'react';
import PropTypes from 'prop-types';

const urlApi = 'https://economia.awesomeapi.com.br/json/all';
class Currency extends React.Component {
  constructor() {
    super();

    this.state = {
      newCurrencyList: [],
    };
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const getAPI = await fetch(urlApi);
    const apiJSON = await getAPI.json();
    const currencyList = Object.values(apiJSON);
    const newCurrencyList = currencyList
      .filter((currency) => currency !== 'USDT' && currency.codein !== 'BRLT');
    this.setState({
      newCurrencyList,
    });
  }

  render() {
    const { newCurrencyList } = this.state;
    const { currencyValue, onChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        {' '}
        <select
          name="currency"
          id="currency"
          onChange={ onChange }
          value={ currencyValue }
        >
          {newCurrencyList.filter((currency) => currency !== 'USDT')
            .map((currency) => (
              <option
                key={ currency.code }
                value={ currency.code }
              >
                {currency.code}
              </option>
            ))}
        </select>
      </label>

    );
  }
}

export default Currency;

Currency.propTypes = {
  currencyValue: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
