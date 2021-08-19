import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.sumValues = this.sumValues.bind(this);
  }

  sumValues() {
    const { expenses } = this.props;

    // Código feito com base no PR de Martin Brazon
    // Link: https://github.com/tryber/sd-012-project-trybewallet/pull/61/commits/834bdd3f31b9aefc39fc8780c8919e3970c6129c#
    return expenses.reduce((acomulator, { value, exchangeRates, currency }) => (
      acomulator + exchangeRates[currency].ask * value
    ), 0);
  }

  render() {
    const { email } = this.props;

    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p>
          Total gasto: R$
          <span data-testid="total-field">{` ${this.sumValues()}`}</span>
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
