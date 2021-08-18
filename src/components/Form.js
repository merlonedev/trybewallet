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

  handleChange({ target: { id, value } }) {
    this.setState(({
      [id]: value,
    }));
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

  render() {
    const { value, description, method, tag, currency } = this.state;
    const inputValor = {
      htmlFor: 'input-valor',
      labelText: 'Valor',
      type: 'text',
      id: 'value',
      value,
      onChange: this.handleChange,
    };

    const inputDescription = {
      htmlFor: 'input-description',
      labelText: 'Descrição',
      type: 'text',
      id: 'description',
      value: description,
      onChange: this.handleChange,
    };

    return (
      <form>
        <Inputs { ...inputValor } />
        <Inputs { ...inputDescription } />
        <PaymentMethod onChange={ this.handleChange } value={ method } id="method" />
        <Currencies onChange={ this.handleChange } value={ currency } id="currency" />
        <Tag onChange={ this.handleChange } value={ tag } id="tag" />
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
