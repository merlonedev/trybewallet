import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoinAPI } from '../actions';
import Pagamento from '../componentes/Pagamento';
import Motivo from '../componentes/Motivo';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      // valor: '',
      // descricao: '',
      // pagamento: '',
      // motivo: '',
      // expenses: {
      //   id: '',
      //   cotacao: '',
      // },
    };
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  // add() {
  //   this.setState({
  //     total: { valor * cotacao }
  //   });
  // }

  render() {
    const { total } = this.state;
    const { email, currencies } = this.props;
    return (
      <body>
        <header>
          <span data-testid="email-field">{ email }</span>
          <span data-testid="total-field">{ total }</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" name="valor" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" name="descricao" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="moeda" id="moeda">
              { currencies.map((currency) => (
                <option
                  value={ currency }
                  key={ currency }
                >
                  {currency}
                </option>))}
            </select>
          </label>
          <Pagamento />
          <Motivo />
          <button type="button" onClick={ this.add }>Adicionar despesa</button>
        </form>
      </body>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchCoinAPI()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
