import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { loginEmail } = this.props;
    const gasto = 0;
    return (
      <div>
        <header>
          <div data-testid="email-field">{ `Email: ${loginEmail}` }</div>
          <div data-testid="total-field">
            { gasto }
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="description">
            Descrição
            <input id="description" type="text" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              <option>Empty</option>
            </select>
          </label>
          <label htmlFor="payment-option">
            Método de pagamento
            <select id="payment-option">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

Wallet.propTypes = {
  loginEmail: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
