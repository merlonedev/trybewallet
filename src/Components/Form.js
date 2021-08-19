import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { Currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea type="text" id="description" rows="3" cols="10" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            { Currencies.map((curr, i) => (
              <option key={ i } value={ curr }>{ curr }</option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="money" selected>Dinheiro</option>
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="food" selected>Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  Currencies: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  Currencies: state.wallet.Currencies,
});

export default connect(mapStateToProps)(Form);
