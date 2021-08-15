import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchAPI } from '../actions';
import Button from '../components/Button';
// import wallet from '../reducers/wallet';

class Wallet extends React.Component {
// Coloca estado p Q8
  // constructor() {
  //   super();
  //   this.state = {
  //     value: '',
  //     description: '',
  //     currencie: 'USD',
  //     paymentMethod: 'Dinheiro',
  //     tag: 'Alimentação',
  //

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  // handleSubmit() {
  //   const {  }
  // }
  handleClick({ target }) {
    const { type, value } = target;
    this.setState({ [type]: value });
  }

  // Q8
  // handleClick() {
  //   getCurrencies(this.state);
  //   this.setState({
  //     value: '',
  //     description: '',
  //     currencie: 'USD',
  //     paymentMetod: 'Dinheiro',
  //     tag: 'Alimentação',
  //   });
  // }

  addExpense() {
    return (
      <label htmlFor="Valor">
        Valor
        <input
          id="Valor"
          placeholder="Acrescente o valor de sua despesa"
        />
      </label>
    );
  }

  addExpDescription() {
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          id="Descrição"
          placeholder="Adicione a descrição de sua despesa"
        />
      </label>
    );
  }

  addCurrency() {
    const { wallet: { currencies } } = this.props;
    // console.log(Object.values(currencies));
    return (
      <label htmlFor="Moeda">
        Moeda
        <select
          id="Moeda"
          alt="Moeda"
        >
          { Object.values(currencies).map((currencie, index) => (
            <option value={ currencie } key={ index }>
              {currencie}
            </option>
          )) }
        </select>
      </label>
    );
  }

  paymentMetod() {
    return (
      <label htmlFor="Método de pagamento">
        Método de pagamento
        <select
          id="Método de pagamento"
          alt="Método de pagamento"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  categorySelection() {
    return (
      <label htmlFor="Tag">
        Tag
        <select
          id="Tag"
          alt="Tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    // const { handleClick } = this.props;
    // está faltando expenses p/ 5 passar
    // const { wallet: { currencies } } = this.props;
    // if (Object.values(currencies).length > 0) {
    return (
      <div>
        TrybeWallet
        <Header />
        <form>
          {this.addExpense()}
          {this.addExpDescription()}
          {this.addCurrency()}
          {this.paymentMetod()}
          {this.categorySelection()}
          {/* questão8 - button */}
          <Button handleClick={ this.handleClick } text="Adicionar despesa" />
        </form>
      </div>
    );
  }
  // return (wallet);
}
// }

const mapStateToProps = (state) => ({ wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.shape(),
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
