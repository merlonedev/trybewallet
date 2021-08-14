import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.calcTotal = this.calcTotal.bind(this);
  }

  calcTotal() {
    const { expenses } = this.props;
    const newTotal = expenses.reduce((acc, curr) => (
      acc
        + parseFloat(curr.value)
        * parseFloat(curr.exchangeRates[curr.currency].ask)
    ), 0);
    return newTotal.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <h1 className="logo">Fluxo_</h1>
        <div className="data-header">
          <p
            data-testid="email-field"
            className="field-email"
          >
            {`Usuário ${email}`}
          </p>
          <p
            data-testid="total-field"
            className="despesas"
          >
            { `Despesas Totais: R$${this.calcTotal()}` }
          </p>
          <p
            data-testid="header-currency-field"
          >
            Câmbio: BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
};

Header.defaultProps = {
  expenses: undefined,
};
