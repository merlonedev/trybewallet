import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, totalExpenses } = this.props;

    let soma = 0;

    if (totalExpenses.length > 0) {
      soma = totalExpenses.reduce(
        (acc, curr) => (
          Number(curr.value * curr.exchangeRates[curr.currency].ask) + acc),
        0,
      );
    }
    return (
      <section>

        <header>
          <span data-testid="email-field">
            Usuário:
            { email }
          </span>
          <div className="info-container">
            <span data-testid="total-field">{soma.toFixed(2)}</span>
            <span data-testid="header-currency-field">BRL</span>
          </div>

        </header>

      </section>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string,
  totalExpenses: PropTypes.number,
}.isRequired;
