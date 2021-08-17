import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Edit extends React.Component {
  render() {
    const { handleChange, state, currencies } = this.props;
    const { price, coin, payment, tag, description } = state;
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
          options={ currencies }
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

Edit.propTypes = {
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
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  itemID: state.wallet.itemID,
});

export default connect(mapStateToProps)(Edit);
