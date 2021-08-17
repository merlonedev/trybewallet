import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCurrencies from '../../../services/economiaAPI';

class SelectCurrency extends React.Component {
  componentDidMount() {
    const { takingCurrencies } = this.props;
    takingCurrencies();
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <label htmlFor="wallet-currency">
          Moeda
          <select name="currency" id="wallet-currency">
            {currencies.map((currency) => {
              if (currency !== 'USDT') {
                return (
                  <option
                    name={ currency }
                    key={ currency }
                  >
                    {currency}
                  </option>
                );
              }
              return null;
            })}
          </select>
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  takingCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

SelectCurrency.propTypes = {
  takingCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
