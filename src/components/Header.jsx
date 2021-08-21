import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {
      user: { email },
      wallet: { sum },
    } = this.props;

    return (
      <header id="header-info">
        <div>
          <span data-testid="email-field">
            <b>E-mail: </b>
            <i>{email}</i>
          </span>
        </div>
        <div>
          <h2>Julius Wallet</h2>
        </div>
        <div>
          <span data-testid="total-field">
            <b>Despesa Total: </b>
            <i>R$ </i>
            <i>{sum.toFixed(2)}</i>
          </span>
          <span data-testid="header-currency-field">
            <i> BRL</i>
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    sum: PropTypes.number.isRequired,
    expenses: PropTypes.shape({
      value: PropTypes.string,
      currency: PropTypes.string,
      exchangeRates: PropTypes.objectOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
};
