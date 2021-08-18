import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoinAPI, fetchExpenses } from '../actions';
import Pagamento from '../componentes/Pagamento';
import Motivo from '../componentes/Motivo';
import Header from '../componentes/Header';
import Tabela from '../componentes/Tabela';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  add() {
    const { fetchtAPIExpenses } = this.props;
    fetchtAPIExpenses(this.state);
  }

  render() {
    const { currencies } = this.props;
    return (
      <body>
        <Header />
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              min={ 0 }
              name="value"
              id="value"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input
              type="text"
              name="description"
              id="descricao"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="currency" id="moeda" onChange={ this.handleChange }>
              { currencies.map((currency) => (
                <option
                  value={ currency }
                  key={ currency }
                >
                  {currency}
                </option>))}
            </select>
          </label>
          <Pagamento handleChange={ this.handleChange } />
          <Motivo handleChange={ this.handleChange } />
          <button type="button" onClick={ this.add }>Adicionar despesa</button>
          <Tabela add={ this.add } />
        </form>
      </body>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchCoinAPI()),
  fetchtAPIExpenses: (payload) => dispatch(fetchExpenses(payload)),
});

Wallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  fetchtAPIExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
