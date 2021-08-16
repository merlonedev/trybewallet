import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Comoponents/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  render() {
    const { getEmail } = this.props;
    const { total } = this.state;
    return (
      <div>
        <Header getEmail={ getEmail } total={ total } />
        <section>
          <label htmlFor="input-valor">
            Valor:
            <input
              type="text"
              id="input-valor"
            />
          </label>
          <label htmlFor="input-descricao">
            Descrição:
            <input
              type="text"
              id="input-descricao"
            />
          </label>
          <label htmlFor="select-moeda">
            Moeda:
            <select id="select-moeda">
              <option>BRL</option>
            </select>
          </label>
          <label htmlFor="select-moeda">
            Método de pagamento:
            <select id="select-moeda">
              <option value="cash">Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="select-moeda">
            Tag:
            <select id="select-moeda">
              <option value="food">Alimentação</option>
              <option value="recreation">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </section>
      </div>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    getEmail: state.user.email,
  };
}

export default connect(mapStateToProps)(Wallet);
