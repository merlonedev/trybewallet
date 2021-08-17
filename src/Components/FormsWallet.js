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
      // currency: 0,
      // payment: 'dinheiro',
      // tag: 'alimentação',
      // expencies: [],
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
    return (
      <form>
        <label htmlFor="balance">
          Valor
          <input type="text" name="balance" />
        </label>
        <label htmlFor="coins">
          Moeda
          {/* <select name="coins" /> */}
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
            <option value="alimenta">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">transporte</option>
            <option value="saude">Saúde</option>
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

FormsWallet.propTypes = {
  setDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinsMap: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  setDispatch: () => dispatch(fetchApiCurriencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
