import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DescricaoDespesa from '../components/FomsFunctions/DescricaoDespesa';
import MetodoPagamento from '../components/FomsFunctions/MetodoPagamento';
import SelecionarCategoria from '../components/FomsFunctions/SelecionarCategoria';
import TipoMoeda from '../components/FomsFunctions/TipoMoeda';
import ValorDespesa from '../components/FomsFunctions/ValorDespesa';
import { fetchAPI } from '../actions';
import Header from '../components/Header';
// import wallet from '../reducers/wallet';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      currency: 'USD',
      value: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addDespesas = this.addDespesas.bind(this);
  }

  // componentDidMount() {
  //   const { getCurrencies } = this.props;
  //   getCurrencies();
  // }

  addDespesas() {
    const { addDespesa } = this.props;
    addDespesa(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    return (
      <div>
        <Header
          currency={ currency }
          value={ value }
        />
        <form>
          <DescricaoDespesa
            description={ description }
            handleChange={ this.handleChange }
          />
          <MetodoPagamento
            method={ method }
            handleChange={ this.handleChange }
          />
          <SelecionarCategoria
            tag={ tag }
            handleChange={ this.handleChange }
          />
          <TipoMoeda
            currency={ currency }
            handleChange={ this.handleChange }
          />
          <ValorDespesa
            value={ value }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.addDespesas }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDespesa: (state) => { dispatch(fetchAPI(state)); },
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  addDespesa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
