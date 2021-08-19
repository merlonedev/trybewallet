import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moedas from './Moedas';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      descricao: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.props;
    const { valor, descricao, moeda, metodo, tag } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        TrybeWallet
        <form>
          <label htmlFor="despesas">
            Valor
            <input type="text" name={ valor } onChange={ this.handleChange } />
          </label>
          <label htmlFor="descrição">
            Descrição
            <input type="text" name={ descricao } onChange={ this.handleChange } />
          </label>
          <Moedas name={ moeda } onChange={ this.handleChange } />
          <label htmlFor="pagamento">
            Método de pagamento
            <select name={ metodo } onChange={ this.handleChange }>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Tag
            <select name={ tag } onChange={ this.handleChange }>
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
