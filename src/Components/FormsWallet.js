import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurriencies } from '../actions/index.login';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      description: '',
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

  // handlerClick({ target: { value, name } } {
  //   [name]: value,
  // })

  render() {
    const { balance, description } = this.state;
    // const { coinsMap } = this.props;
    return (
      <>
        <form>
          <label htmlFor="balance">
            Valor
            <input type="text" name="balance" />
            {balance}
          </label>
          <label htmlFor="currency">
            Moeda
            {/* <select id="currency">
              { coinsMap.map((item, index) => (
                <option key={ index } value={ item }>{item}</option>))}
            </select> */}
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
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" />
            { description }
          </label>
        </form>
        <button
          type="button"
        >
          Adicionar despesa
        </button>
      </>
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
