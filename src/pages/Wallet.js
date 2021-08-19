import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moedas from './Moedas';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moedas: {},
    };
  }

  componentDidMount() {
    this.fetchMoedas();
  }

  async fetchMoedas() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(url);
    const json = await response.json();
    delete json.USDT;
    this.setState({ moedas: json });
  }

  render() {
    const { email } = this.props;
    const { moedas } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        TrybeWallet
        <form>
          <label htmlFor="value">
            Valor:
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição:
            <input type="text" id="description" />
          </label>
          <Moedas moedas={ moedas } />
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Tag
            <select id="categoria">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
