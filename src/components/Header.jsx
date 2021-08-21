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
      <header>
        <span data-testid="email-field">
          E-mail:
          {email}
        </span>
        <span data-testid="total-field">
          Despesa Total: R$
          {sum}
        </span>
        <span data-testid="header-currency-field"> BRL</span>
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
