import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses, fetchCoins } from '../actions';
import { methods, category } from './optionsSelect';
import Input from './Input';
import Button from './Button';
import Select from './Select';

const INITIAL_STATE = {
  expense: 0,
  coin: 'USD',
  description: '',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
      id: 0,
      isLoading: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCurrency = this.getCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCurrency();
  }

  async getCurrency() {
    const { props: { queryAPI } } = this;
    await queryAPI();
    this.setState((state) => ({
      ...state,
      isLoading: false,
    }));
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  async handleSubmit() {
    const { state, state: { id }, props: { saveExpense } } = this;
    await this.setState({ ...state, id: id + 1 });

    const infoExpense = { ...state };
    saveExpense(infoExpense);

    this.setState(INITIAL_STATE);
  }

  render() {
    const { state: { expense, description, isLoading, method, tag, coin },
      props: { currency }, handleChange, handleSubmit } = this;
    if (isLoading) {
      return <h1>Carregando...</h1>;
    }
    return (
      <section>
        <Input
          label="Valor"
          type="number"
          name="expense"
          value={ expense }
          handleChange={ handleChange }
        />
        <Input
          label="Descrição"
          type="text"
          name="description"
          value={ description }
          handleChange={ handleChange }
        />
        <Select
          name="coin"
          label="Moeda"
          value={ coin }
          options={ currency }
          handleChange={ handleChange }
        />
        <Select
          name="method"
          label="Método de pagamento"
          value={ method }
          options={ methods }
          handleChange={ handleChange }
        />
        <Select
          name="tag"
          label="Tag"
          value={ tag }
          options={ category }
          handleChange={ handleChange }
        />
        <Button
          label="Adicionar despesa"
          submit={ handleSubmit }
        />
      </section>
    );
  }
}
const { func, arrayOf, string } = PropTypes;

Form.propTypes = {
  queryAPI: func.isRequired,
  currency: arrayOf(string).isRequired,
  saveExpense: func.isRequired,
};

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  queryAPI: () => dispatch(fetchCoins()),
  saveExpense: (state) => dispatch(saveExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
