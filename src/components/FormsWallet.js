import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

export default class FormsWallet extends React.Component {
  constructor(props) {
    super(props);

    this.renderLoading = this.renderLoading.bind(this);
    this.getCoins = this.getCoins.bind(this);
    this.renderCoins = this.renderCoins.bind(this);
    this.renderCoinSelect = this.renderCoinSelect.bind(this);
    this.renderValueInput = this.renderValueInput.bind(this);
    this.renderDescriptionInput = this.renderDescriptionInput.bind(this);
    this.renderPaymentMethodSelect = this.renderPaymentMethodSelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
  }

  async componentDidMount() {
    await this.getCoins();
  }

  async getCoins() {
    const { getCurrenciesNames } = this.props;
    await getCurrenciesNames();
  }

  renderLoading() {
    const { wallet: { isFetching } } = this.props;
    if (isFetching) return <Loading />;
  }

  renderCoins() {
    const { wallet: { currencies } } = this.props;
    if (currencies) {
      const filteredCoins = currencies.filter((coin) => coin.codein !== 'BRLT');
      return filteredCoins.map((option, index) => (
        <option key={ `option${index}` } value={ option.code }>{ option.code }</option>
      ));
    }
  }

  renderValueInput(callBack) {
    return (
      <label htmlFor="expense-value">
        Valor
        <input
          id="expense-value"
          name="value"
          onChange={ ({ target }) => callBack(target.name, target.value) }
        />
      </label>
    );
  }

  renderDescriptionInput(callBack) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          id="description"
          name="description"
          onChange={ ({ target }) => callBack(target.name, target.value) }
        />
      </label>
    );
  }

  renderCoinSelect(callBack) {
    const { walletPage: { currency } } = this.props;
    return (
      <label htmlFor="coin">
        Moeda
        <select
          id="coin"
          value={ currency }
          onChange={ ({ target }) => callBack('currency', target.value) }
        >
          { this.renderCoins() }
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect(callBack) {
    const { walletPage: { method } } = this.props;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          id="payment-method"
          value={ method }
          onChange={ ({ target }) => callBack('method', target.value) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect(callBack) {
    const { walletPage: { tag } } = this.props;
    return (
      <label htmlFor="select-tag">
        Tag
        <select
          id="select-tag"
          value={ tag }
          onChange={ ({ target }) => callBack('tag', target.value) }
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

  renderAddExpenseButton(callBack) {
    return (
      <button
        type="button"
        id="add-expense-button"
        onClick={ callBack }
      >
        Adicionar despesa
      </button>
    );
  }

  renderForms() {
    const { saveChange, clickButtonAction } = this.props;
    return (
      <form>
        { this.renderValueInput(saveChange) }
        { this.renderCoinSelect(saveChange) }
        { this.renderPaymentMethodSelect(saveChange) }
        { this.renderTagSelect(saveChange) }
        { this.renderDescriptionInput(saveChange) }
        { this.renderAddExpenseButton(clickButtonAction) }
      </form>
    );
  }

  render() {
    this.renderLoading();
    return this.renderForms();
  }
}

FormsWallet.propTypes = {
  wallet: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  saveChange: PropTypes.func.isRequired,
  getCurrenciesNames: PropTypes.func.isRequired,
  clickButtonAction: PropTypes.func.isRequired,
  walletPage: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  }).isRequired,
};
