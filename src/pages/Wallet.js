import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../actions/index';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      despesaTotal: 0,
      selectedCurrency: 'BRL',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  renderValueInput() {
    return (
      <label htmlFor="value-input">
        Valor
        <input
          type="number"
          id="value-input"
          // value={ valueInputText }
          // onChange={ this.handleChangeValue }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currencies } = this.props;
    const currencyList = Object.keys(currencies).map((currency) => currency);
    return (
      <label htmlFor="currency-select" id="currency-label">
        Moeda
        <select
          aria-labelledby="currency-label"
          id="currency-select"
        >
          {currencyList.map((currency) => (
            <option key={ currency } value={ currency }>{ currency }</option>
          ))}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    return (
      <label htmlFor="payment-method-select" id="payment-method-label">
        Método de pagamento
        <select
          aria-labelledby="payment-method-label"
          id="payment-method-select"
        >
          <option value="money">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect() {
    return (
      <label htmlFor="tag-select" id="tag-label">
        Tag
        <select
          aria-labelledby="tag-label"
          id="tag-select"
        >
          <option value="feeding">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  renderDescriptionInput() {
    return (
      <label htmlFor="description-input">
        Descrição
        <input
          type="text"
          id="description-input"
          // value={ descriptionInputText }
          // onChange={ this.handleChangeDescription }
        />
      </label>
    );
  }

  render() {
    const { userEmail } = this.props;
    const { despesaTotal, selectedCurrency } = this.state;
    return (
      <main>
        <header>
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">{ despesaTotal }</p>
          <p>
            Moeda:
            <span data-testid="header-currency-field">{ selectedCurrency }</span>
          </p>
        </header>
        <div>
          <form>
            { this.renderValueInput() }
            { this.renderCurrencySelect() }
            { this.renderPaymentMethodSelect() }
            { this.renderTagSelect() }
            { this.renderDescriptionInput() }
          </form>
        </div>
      </main>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.shape(PropTypes.shape).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
