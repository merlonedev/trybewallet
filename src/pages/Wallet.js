import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Formulario from '../components/Formulario';
import { GET_API } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { api } = this.props;
    api();
  }

  sumTotal() {
    const { expenses } = this.props;
    if (expenses.length < 1) return 0;
    const total = expenses.reduce((acc, expense) => {
      const { [expense.currency]: currency } = expense.exchangeRates;
      acc += currency.ask * expense.value;
      return acc;
    }, 0);
    return total;
  }

  render() {
    const { email } = this.props;
    const total = this.sumTotal();
    return (
      <div>
        <header>
          <h1>Trybe Wallet</h1>
          <h3 data-testid="email-field">{`E-mail: ${email}`}</h3>
          <h3 data-testid="total-field">{`Gasto total: ${Number(total).toFixed(2)} `}</h3>
          <h3 data-testid="header-currency-field">Câmbio atual: BRL </h3>
        </header>
        <Formulario />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email, expenses: state.wallet.expenses });
const mapDispatchToProps = (dispatch) => ({ api: (value) => dispatch(GET_API(value)) });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  api: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
