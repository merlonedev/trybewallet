import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApiCurriencies } from '../actions/index.login';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      description: '',
      currency: 0,
      payment: 'dinheiro',
      tag: 'alimentação',
    };
  }

  componentDidMount() {
    const { setDispatch } = this.props;
    setDispatch();
  }

  handlerChange({ target: { value, name } }) {
    this.setState = ({
      [name]: value,
    });
  }

  render() {
    const { balance, currency } = this.state;
    return (
      <form>
        <label htmlFor="balance">
          Valor
          <input type="text" name="balance" />
          {balance}
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency">
            { currency.map((el, index) => (<option
              key={ index }
              value={ el }
            >
              {el}
            </option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment">
            <option value="dinheiro">Dinheiro</option>
            <option value="crédito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag">
            <option type="checkbox" value="alimentação">Alimentação</option>
            <option type="checkbox" value="lazer">Lazer</option>
            <option type="checkbox" value="trabalho">Trabalho</option>
            <option type="checkbox" value="transporte">transporte</option>
            <option type="checkbox" value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" name="description" />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.userWallet.currency,
});

const mapDispatchToProps = (dispatch) => ({
  setDispatch: () => dispatch(fetchApiCurriencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
