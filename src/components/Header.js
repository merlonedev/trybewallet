import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    const total = 0;
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
            {`Despesas totais: ${total}`}
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
};
