import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.setTotalField = this.setTotalField.bind(this);
  }

  setTotalField() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const totalField = expenses.reduce((acc, curr) => {
        const value = parseFloat(curr.expense);
        const { coin, exchangeRates } = curr;
        const convert = exchangeRates[coin].ask * value;
        return acc + convert;
      }, 0);
      return totalField;
    }
    return 0;
  }

  render() {
    const { props: { userEmail }, setTotalField } = this;
    return (
      <header>
        <aside>
          <h2 data-testid="email-field">
            {`E-mail: ${userEmail}`}
          </h2>
          <h3 data-testid="total-field">
            {`Total de despesas: ${setTotalField()}`}
          </h3>
          <h4 data-testid="header-currency-field">BRL</h4>
        </aside>
      </header>
    );
  }
}

const { string, arrayOf, objectOf } = PropTypes;

Header.propTypes = {
  userEmail: string.isRequired,
  expenses: arrayOf(objectOf(string)).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
