import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExpenses, fetchCurrencies } from '../actions/index';
import Inputs from './Inputs';
import PaymentMethod from './PaymentMethod';
import Currencies from './Currencies';
import Tag from './Tag';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      method: 'Cartão de crédito',
      tag: 'Lazer',
      currency: 'USD',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveToRedux = this.saveToRedux.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async saveToRedux() {
    const { addList } = this.props;
    const { id } = this.state;
    const object = { ...this.state };
    addList(object);
    this.setState({
      id: id + 1,
    });
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { value, description, method, tag, currency } = this.state;
    const inputValor = {
      htmlFor: 'input-valor',
      labelText: 'Valor',
      type: 'text',
      id: 'input-valor',
      name: 'value',
      value,
      onChange: this.handleChange,
    };
    const inputDescription = {
      htmlFor: 'input-description',
      labelText: 'Descrição',
      type: 'text',
      id: 'input-description',
      name: 'descritpion',
      value: description,
      onChange: this.handleChange,
    };
    const currencyProps = {
      value: currency,
      onChange: this.handleChange,
      id: 'currency',
    };
    const paymentMethodProps = {
      value: method,
      id: 'method',
      onChange: this.handleChange,
    };
    const tagProps = {
      value: tag,
      id: 'tag',
      onChange: this.handleChange,
    };
    return (
      <form>
        <Inputs { ...inputValor } />
        <Inputs { ...inputDescription } />
        <PaymentMethod { ...currencyProps } />
        <Currencies { ...paymentMethodProps } />
        <Tag { ...tagProps } />
        <button
          onClick={ this.saveToRedux }
          type="button"
        >
          Adicionar despesa

        </button>
      </form>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  expenses: (payload) => dispatch(getExpenses(payload)),
  addList: (value) => dispatch(fetchCurrencies(value)),
});

Form.propTypes = {
  expenses: PropTypes.objectOf.isRequired,
  addList: PropTypes.objectOf.isRequired,
};

export default connect(null, mapDispatchToProps)(Form);
