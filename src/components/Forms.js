import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies } from '../actions';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      apiOptions: [],
    };
  }

  componentDidMount() {
    this.requestAPI();
  }

  async requestAPI() {
    const { makeRequest } = this.props;
    await makeRequest();
    const { currencies } = this.props;
    this.setState({ apiOptions: currencies });
  }

  render() {
    const { handleChange, state } = this.props;
    const { price, description, coin, tag, payment } = state;
    const { apiOptions } = this.state;
    return (
      <>
        <Input
          id="price"
          labelText="Valor"
          dataTest="value-input"
          value={ price }
          handleChange={ handleChange }
          type="number"
        />
        <Select
          id="coin"
          labelText="Moeda"
          dataTest="currency-input"
          value={ coin }
          handleChange={ handleChange }
          options={ apiOptions }
        />
        <Select
          id="payment"
          labelText="Método de pagamento"
          dataTest="method-input"
          value={ payment }
          handleChange={ handleChange }
          options={ paymentMethods }
        />
        <Select
          id="tag"
          labelText="Tag"
          dataTest="tag-input"
          value={ tag }
          handleChange={ handleChange }
          options={ tagOptions }
        />
        <Input
          id="description"
          labelText="Descrição"
          dataTest="description-input"
          value={ description }
          handleChange={ handleChange }
          type="text"
        />
      </>
    );
  }
}

Forms.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.shape({
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    description: PropTypes.string,
    coin: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
  }).isRequired,
  makeRequest: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  makeRequest: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
