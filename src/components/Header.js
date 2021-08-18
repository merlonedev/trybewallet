import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'BRL',
    };
  }

  render() {
    const {
      props: { email, expenses },
      state: { currency },
    } = this;
    let total = 0;
    if (expenses.length > 0) {
      expenses.map((expense) => {
        total += parseFloat(expense.value);
        return total;
      });
    }
    return (
      <div>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { `Despesa Total R$${total}`}
        </div>
        <div data-testid="header-currency-field">
          { currency }
        </div>
      </div>
    );
  }
}

const { string, number, object, oneOfType } = PropTypes;
Header.propTypes = {
  email: string.isRequired,
  expenses: oneOfType([number, object]),
};

Header.defaultProps = {
  expenses: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
