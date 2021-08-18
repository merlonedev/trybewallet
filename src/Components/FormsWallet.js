import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurriencies } from '../actions/index.login';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // balance: '',
      // description: '',
      currency: 'USD',
      // payment: 'dinheiro',
      // tag: 'alimentação',
      // expencies: [],
    };
    this.getCoins = this.getCoins.bind(this);
  }

  componentDidMount() {
    const { setDispatch } = this.props;
    setDispatch();
  }

  getCoins() {
    const { coinsMap } = this.props;
    const setMoedas = [];
    coinsMap.forEach((el, index) => setMoedas.push(
      (<option key={ index }>{el}</option>),
    ));
    return setMoedas;
  }

  handlerChange({ target: { value, name } }) {
    this.setState = ({
      [name]: value,
    });
  }

  render() {
    const { currency } = this.state;
    return (
      <form>
        <label htmlFor="balance">
          valor
          <input type="text" id="balance" />
        </label>
        <label htmlFor="coins">
          Moedas
          <select id="coins" value={ currency }>
            { this.getCoins() }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="alimenta">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
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

FormsWallet.propTypes = {
  setDispatch: PropTypes.func.isRequired,
  coinsMap: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinsMap: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setDispatch: () => dispatch(fetchApiCurriencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
