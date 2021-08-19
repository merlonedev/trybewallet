import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import sucessFetch from '../actions/wallet';
import fetchCoinApi from '../services/fetchApi';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    this.renderCurrency();
    const { getCoin } = this.props;
    const { coins } = this.state;
    getCoin(coins);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async renderCurrency() {
    const moedas = await fetchCoinApi();
    const filteredCoins = Object.keys(moedas).filter((coin) => coin !== 'USDT');
    this.setState({
      coins: filteredCoins,
    });
  }

  render() {
    const { value, currency, tag, method, description, expenses } = this.state;
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
          expenses={ expenses }
          onClick={ this.getMoedas }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoin: (value) => dispatch(sucessFetch(value)),
});

FormWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCoin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormWallet);
