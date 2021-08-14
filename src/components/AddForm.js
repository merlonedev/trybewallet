import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actGetExpenses, getCurrencies } from '../actions';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInputValue = this.renderInputValue.bind(this);
    this.renderPaymentSelect = this.renderPaymentSelect.bind(this);
    this.renderTagSelect = this.renderTagSelect.bind(this);
    this.renderDescript = this.renderDescript.bind(this);
    this.renderCurrSelect = this.renderCurrSelect.bind(this);

    this.state = {
      expenses: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };
  }

  componentDidMount() {
    const { getFetch } = this.props;
    getFetch();
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { expenses } = this.state;
    this.setState({
      expenses: {
        ...expenses,
        [name]: value,
      },
    });
  }

  handleClick() {
    const { getExpenses } = this.props;
    const { getFetch } = this.props;
    getFetch();
    const { expenses } = this.state;
    getExpenses(expenses);
    this.setState({
      expenses: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    });
  }

  renderInputValue() {
    const { expenses: { value } } = this.state;

    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            className="input-style"
            type="number"
            value={ value }
            id="valor"
            name="value"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  renderCurrSelect() {
    const { currencies } = this.props;
    const { expenses: { currency } } = this.state;

    return (
      <div>
        <label htmlFor="curr-select">
          Moeda
          <select
            className="input-style"
            id="curr-select"
            value={ currency }
            name="currency"
            onChange={ this.handleChange }
          >
            { currencies.filter((curr) => curr !== 'USDT').map((curr) => (
              <option
                value={ curr }
                key={ curr }
              >
                { curr }
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }

  renderPaymentSelect() {
    const { expenses: { method } } = this.state;
    return (
      <div>
        <label htmlFor="payment-select">
          Método de Pagamento
          <select
            className="input-style"
            id="payment-select"
            value={ method }
            name="method"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de Crédito</option>
            <option value="débito">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }

  renderTagSelect() {
    const { expenses } = this.state;
    const { tag } = expenses;

    return (
      <div>
        <label htmlFor="tag-select">
          Tag
          <select
            className="input-style"
            id="tag-select"
            value={ tag }
            name="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </div>
    );
  }

  renderDescript() {
    const { expenses } = this.state;
    const { description } = expenses;

    return (
      <div>
        <label htmlFor="descrição">
          Descrição
          <input
            className="input-style"
            type="text"
            value={ description }
            id="descrição"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <form className="add-form">
        {this.renderInputValue()}
        {this.renderCurrSelect()}
        {this.renderPaymentSelect()}
        {this.renderTagSelect()}
        {this.renderDescript()}
        <button
          type="button"
          className="btn-add"
          onClick={ this.handleClick }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getFetch: () => dispatch(getCurrencies()),
  getExpenses: (expenses) => dispatch(actGetExpenses(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

AddForm.propTypes = {
  getFetch: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
