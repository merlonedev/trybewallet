import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { loginEmail } = this.props;
    const gasto = 0;
    return (
      <div>
        <header>
          <h1
            data-testid="email-field"
          >
            { loginEmail }
          </h1>
          <p data-testid="total-field">
            gastos totais: $
            { gasto }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

Wallet.propTypes = {
  loginEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
