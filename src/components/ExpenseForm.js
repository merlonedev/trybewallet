import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiExpenses, fetchApiCurrencies } from '../actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onClick() {
    const { expenses, getExpenses } = this.props;
    const id = expenses.length;
    getExpenses({ ...this.state, id });
  }

  descriptionGenerator(description) {
    return (
      <textarea
        id="description"
        name="description"
        type="text"
        value={ description }
        onChange={ this.onChange }
      />
    );
  }

  methodGenerator(method) {
    return (
      <select id="method" name="method" value={ method } onChange={ this.onChange }>
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    );
  }

  tagGenerator(tag) {
    return (
      <select
        id="tag"
        name="tag"
        value={ tag }
        onChange={ this.onChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currenciesList } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            id="value"
            name="value"
            type="text"
            value={ value }
            onChange={ this.onChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.onChange }
          >
            { currenciesList.map((item) => (
              <option key={ item } value={ item }>
                { item }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          { this.methodGenerator(method) }
        </label>
        <label htmlFor="tag">
          Tag
          { this.tagGenerator(tag) }
        </label>
        <label htmlFor="description">
          Descrição
          { this.descriptionGenerator(description) }
        </label>
        <button type="button" onClick={ this.onClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesList: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchApiCurrencies()),
  getExpenses: (expense) => dispatch(fetchApiExpenses(expense)),
});

ExpenseForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currenciesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
