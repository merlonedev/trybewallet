import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { totalExpenseAction } from '../actions/index';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (

      <div>
        <p data-testid="email-field">
          {`Email: ${email}`}
          {/* { console.log(email) } */}
        </p>
        {/* <p data-testid="total-field">0</p> */}
        <p data-testid="header-currency-field">BRL</p>
        <p data-testid="total-field">
          Total:
          { expenses }
          {console.log(expenses)}
        </p>
      </div>

    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
