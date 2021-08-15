import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';

class Form extends React.Component {
  render() {
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="preco">
          Valor:
          <input id="preco" type="number" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda">
            {coins.length === undefined ? '' : coins.map((item) => (
              <option
                key={ item }
              >
                { item }
              </option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
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
        <label htmlFor="descricao">
          Descrição
          <input id="descricao" type="text" />
        </label>
        <Button />
      </form>
    );
  }
}

Form.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
