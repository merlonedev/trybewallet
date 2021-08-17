import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    // const { currency } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input name="value" type="number" id="value-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input name="description" type="text" id="description-input" />
        </label>
        <label htmlFor="cur">
          Moeda
          <select id="cur" name="currency">
            <p>fazer fetch</p>
          </select>
        </label>
        <label htmlFor="payment-input">
          Método de pagamento
          <select
            id="payment-input"
          >
            <option> </option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category-input">
          Tag
          <select
            id="category-input"
          >
            <option>Categoria</option>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  totalExpenses: state.wallet.totalExpenses,
  currency: state.wallet.currency,
});

export default connect(mapStateToProps)(Form);
