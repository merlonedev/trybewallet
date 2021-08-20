import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../store';
import Inputs from './Inputs';
import Selects from './Selects';
import { addExchanges } from '../actions';

class AddExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: -1,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    const { addExpenses } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await response.json();
    // console.log(results);
    this.setState(({ id }) => ({
      id: id + 1,
      exchangeRates: results,
    }), () => { addExpenses(this.state); });
    console.log(store.getState().wallet.expenses);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(store.getState().wallet.expenses);
    return (
      <div>
        <section>
          <Inputs
            onChange={ this.handleChange }
            value={ value }
            description={ description }
          />
          <Selects
            currencies={ currencies }
            currency={ currency }
            method={ method }
            tag={ tag }
            onChange={ this.handleChange }
          />
        </section>
        <button
          onClick={ this.handleSubmit }
          type="button"
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

AddExpenses.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  addExpenses: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExpenses: (expenses) => dispatch(addExchanges(expenses)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenses);
