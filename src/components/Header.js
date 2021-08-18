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
    return (
      <div>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { `Despesa Total R$${expenses}`}
          {/* perguntar na monitoria sobre o erro de expenses */}
        </div>
        <div data-testid="header-currency-field">
          { currency }
        </div>
      </div>
    );
  }
}

const { string, number } = PropTypes;
Header.propTypes = {
  email: string.isRequired,
  expenses: number,
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
