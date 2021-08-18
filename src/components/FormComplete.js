import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import fetchAPI from '../actions/fetchAPI';
import getCurrencies from '../actions/getCurrencies';

class FormComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      tag: 'Alimentação',
      method: 'Dinheiro',
      description: '',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchWallet = this.fetchWallet.bind(this);
  }

   async componentDidMount() {
    const { currency } = this.props;
    await this.fetchWallet(currency)
  }

  fetchWallet = async (currency) => {
  const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const results = await fetchAPI.json();
  delete results.USDT;
  currency(results);
  };

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { currency } = this.props;
    currency(this.state);
    this.setState(({ id }) => ({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      tag: 'Alimentação',
      method: 'Dinheiro',
    }));
  }

  render() {
    const { value, currency, tag, method, description} = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          value={ value }
          description={ description }
          handleChange={ this.handleChange }
        />
        <Select
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
          currencies={ currencies }
        />
        <button
          type="button"
          onClick={ () => { this.handleSubmit(); } }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currency: (currencies) => dispatch(getCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComplete);

