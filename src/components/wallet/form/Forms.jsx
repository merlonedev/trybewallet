import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputExpense from './InputExpense';
import InputValue from './InputValue';
import SelectCurrency from './SelectCurrency';
import SelectPayMet from './SelectPayMet';
import SelectTag from './SelectTag';
import { addingExpenses } from '../../../actions';

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const ECONOMIA_API = 'https://economia.awesomeapi.com.br/json/all';
    const { id } = this.state;
    const { takeState } = this.props;

    fetch(ECONOMIA_API)
      .then((request) => request.json())
      .then((currencies) => this.setState({ exchangeRates: currencies }))
      .then(() => takeState(this.state))
      .then(() => this.setState({ id: id + 1 }));
  }

  render() {
    const { description, value, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;

    return (
      <form>
        <InputExpense expense={ description } onChange={ handleChange } />
        <InputValue value={ value } onChange={ handleChange } />
        <SelectCurrency cur={ currency } onChange={ handleChange } />
        <SelectPayMet payMet={ method } onChange={ handleChange } />
        <SelectTag tag={ tag } onChange={ handleChange } />
        <button type="button" onClick={ handleClick }>Adicionar despesas</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  takeState: (state) => dispatch(addingExpenses(state)),
});

Forms.propTypes = {
  takeState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Forms);
