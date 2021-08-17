import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { `Email: ${email} `}
        </p>
        <p data-testid="total-field">
          { `Despesa Total: R$ ${totalExpense}`}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

Header.defaultProps = {
  totalExpense: 0,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
