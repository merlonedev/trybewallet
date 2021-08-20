import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
  render() {
    const { coins } = this.props;

    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" id="expense" />
        </label>

        <label htmlFor="Currency">
          Moeda
          <select id="Currency" name="Currency" onChange={ this.handleChange }>
            {!coins ? '' : coins.map((item) => (
              <option key={ item }>{ item }</option>))}
          </select>
        </label>

        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="category">
          tag
          <select id="category" name="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>

      </form>
    );
  }
}
ExpenseForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currenciesLessUSDT });

export default connect(mapStateToProps, null)(ExpenseForm);
