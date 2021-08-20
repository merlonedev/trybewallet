import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Forms';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesInComponent } = this.props;
    fetchCurrenciesInComponent();
  }

  render() {
    const { userEmail } = this.props;
    const { totalExpenses } = this.props;
    return (
      <main>
        <header>
          <h1>Bem-Vindo(a) à Trybe Wallet</h1>
          <p
            data-testid="email-field"
          >
            Email:
            { userEmail }
          </p>
          <p
            data-testid="total-field"
          >
            Despesa total:
            { totalExpenses }
          </p>
          <p
            data-testid="header-currency-field"
          >
            Câmbio utilizado: BRL
          </p>
        </header>
        <Form />
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesInComponent: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrenciesInComponent: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

Wallet.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
