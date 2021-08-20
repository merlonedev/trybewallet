import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleSum = this.handleSum.bind(this);
  }

  handleSum() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
      return acc;
    }, 0).toFixed(2);
  }

  render() {
    const { getEmail } = this.props;
    return (
      <div>
        <div>
          <p
            data-testid="email-field"
          >
            {`Email: ${getEmail}`}
          </p>
        </div>
        <div>
          <div>
            <p data-testid="total-field">
              {`Despesa Total: R$ ${this.handleSum()}`}
            </p>
          </div>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function mapStateToProps({ wallet }) {
  return {
    expenses: wallet.expenses,
  };
}

export default connect(mapStateToProps)(Header);
