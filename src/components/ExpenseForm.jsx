import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCurrencies,
  addExpense,
  failedRequest,
  isLoading,
} from '../redux/actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

// prettier-ignore
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderBtn = this.renderBtn.bind(this);
    this.fetchHandleClick = this.fetchHandleClick.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async fetchHandleClick() {
    const { error, loading } = this.props;
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    loading(true);
    try {
      const results = await fetch(URL).then((response) => response.json());
      loading(false);
      return results;
    } catch (err) {
      error(err);
    }
  }

  async handleClick() {
    const { add, wallet: { expenses } } = this.props;
    const { value, currency, method, tag, description } = this.state;
    const expenseId = expenses.length;
    const exchange = await this.fetchHandleClick();
    const expenseToInsert = {
      id: expenseId,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: exchange,
    };
    add(expenseToInsert);
  }

  renderBtn(onClick, className, disabled) {
    return (
      <button
        type="button"
        onClick={ onClick }
        className={ className }
        disabled={ disabled }
      >
        Adicionar Despesa
      </button>
    );
  }

  render() {
    const { disableBtn, wallet: { currencies } } = this.props;
    const filteredCurr = currencies.filter((currency) => currency !== 'USDT');
    return (
      <form id="expense-form">
        <label htmlFor="value">
          Valor:
          <input
            type="text"
            onChange={ this.handleChange }
            id="value"
            className="form__field"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            onChange={ this.handleChange }
            id="description"
            className="form__field"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ this.handleChange } className="form__field">
            {filteredCurr.map((curr) => (<option key={ curr }>{curr}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select id="method" onChange={ this.handleChange } className="form__field">
            {paymentMethods.map((method) => (<option key={ method }>{method}</option>))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            onChange={ this.handleChange }
            data-testid="method-input"
            id="tag"
            className="form__field"
          >
            {tags.map((tag) => (<option key={ tag }>{tag}</option>))}
          </select>
        </label>
        {this.renderBtn(this.handleClick, 'pure-material-button-contained', disableBtn)}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => {
    dispatch(fetchCurrencies());
  },
  add: (expense) => {
    dispatch(addExpense(expense));
  },
  error: (error) => {
    dispatch(failedRequest(error));
  },
  loading: (bool) => {
    dispatch(isLoading(bool));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  fetch: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    currencies: PropTypes.arrayOf(PropTypes.string),
    expenses: PropTypes.arrayOf(PropTypes.string),
    isLoading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  disableBtn: PropTypes.bool.isRequired,
};
