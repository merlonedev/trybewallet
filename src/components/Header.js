import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    let sum = 0;
    const { expenses } = this.props;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      sum += exchangeRates[currency].ask * value;
    });
    return sum;
  }
  // O Repositório do Aladino Borges me ajudou a entender como fazer a função de valor total: https://github.com/tryber/sd-010-b-project-trybewallet/pull/133/files

  render() {
    const { email } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <h3 data-testid="total-field">
          Total:
          { this.totalValue() }
        </h3>
        <h3 data-testid="header-currency-field"> Câmbio: BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
