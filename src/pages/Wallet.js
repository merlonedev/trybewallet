import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../Components/ExpenseForm';
import { currencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <div>Trybe Wallet</div>
          <div>
            Email:
            <p data-testid="email-field">{` ${email}`}</p>
          </div>
          <div>
            <p data-testid="total-field">{0}</p>
            <p data-testid="header-currencies-field">BRL</p>
          </div>
        </header>
        <ExpenseForm />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(currencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
