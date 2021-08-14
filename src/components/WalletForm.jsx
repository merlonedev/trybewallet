import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Value from './Value';
import Select from './Select';
import Payment from './Payment';
import Currency from './Currency';
import Description from './Description';
import { /* actionCambioApi, */ requestExchangeRates } from '../actions';

class WalletForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
  }

  /* handleClick() {
    const { fetchCambioApi } = this.props;
    fetchCambioApi(this.state);
    */

  handleClick() {
    const { sendExpenseToState } = this.props;
    sendExpenseToState(this.state);
    this.setState((updateState) => ({
      id: updateState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, method, tag, currency } = this.state;
    return (
      <form className="add-expenses-form" onSubmit={ (e) => e.preventDefault() }>
        <Value
          name="value"
          label="Valor: "
          type="text"
          value={ value }
          onChange={ this.handleChange }
        />

        <Description
          name="description"
          label="Descrição: "
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <Currency
          currencyValue={ currency }
          onChange={ this.handleChange }
        />

        <Payment
          value={ method }
          onChange={ this.handleChange }
        />

        <Select
          value={ tag }
          onChange={ this.handleChange }
        />

        <button
          type="submit"
          name="adicionar despesa"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>

      </form>

    );
  }
}

const mapDispatchToProps = (dispach) => ({
  // fetchCambioApi: (state) => dispach(actionCambioApi(state)),
  sendExpenseToState: (payload) => dispach(requestExchangeRates(payload)),
});

export default connect(null, mapDispatchToProps)(WalletForm);

WalletForm.propTypes = {
//   fetchCambioApi: PropTypes.func,
  sendExpenseToState: PropTypes.func,
}.isRequired;
