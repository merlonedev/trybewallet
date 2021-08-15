import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DescricaoDespesa from '../components/FomsFunctions/DescricaoDespesa';
import MetodoPagamento from '../components/FomsFunctions/MetodoPagamento';
import SelecionarCategoria from '../components/FomsFunctions/SelecionarCategoria';
import TipoMoeda from '../components/FomsFunctions/TipoMoeda';
import ValorDespesa from '../components/FomsFunctions/ValorDespesa';
// import { fetchAPI } from '../actions';
// import wallet from '../reducers/wallet';

class Wallet extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     description: '',
  //     currency: 'USD',
  //     value: '',
  //     method: 'Dinheiro',
  //     tag: 'Alimentação',
  //   };
  // }

  // componentDidMount() {
  //   const { getCurrencies } = this.props;
  //   getCurrencies();
  // }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">
            e-mail usuário(a):
            { email }
          </p>
          <p data-testid="total-field">
            Despesa: 0
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <form>
          <DescricaoDespesa />
          <MetodoPagamento />
          <SelecionarCategoria />
          <TipoMoeda />
          <ValorDespesa />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
