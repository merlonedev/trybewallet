import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpenses, fetchCoins } from '../actions';
import { methods, category } from './optionsSelect';
import Input from './Input';
import Button from './Button';
import Select from './Select';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      ...INITIAL_STATE,
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
    this.setState((state) => ({ ...state }));
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({ ...state, [name]: value }));
  }

  async handleSubmit() {
    const { state, state: { id }, props: { saveExpense } } = this;
    this.setState({ ...state, id: id + 1 });

    const infoExpense = { ...state };
    await saveExpense(infoExpense);

    this.setState(INITIAL_STATE);
  }

  render() {
    const { state: { value, description, method, tag, currency },
      props: { currencies }, handleChange, handleSubmit } = this;
    if (currencies.length < 1) {
      return <h1>Carregando...</h1>;
    }
    return (
      <section>
        <Input
          label="Valor"
          type="number"
          name="value"
          value={ value }
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
          label="Moeda"
          name="currency"
          value={ currency }
          options={ currencies }
          handleChange={ handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          options={ methods }
          handleChange={ handleChange }
        />
        <Select
          label="Tag"
          name="tag"
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
  currencies: arrayOf(string).isRequired,
  saveExpense: func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  queryAPI: () => dispatch(fetchCoins()),
  saveExpense: (state) => dispatch(saveExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
