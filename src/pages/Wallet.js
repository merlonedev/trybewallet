import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            {`Email: ${email}` }
          </span>
          <br />
          <span>Despesas totais: </span>
          <span data-testid="total-field">
            0
          </span>
          <br />
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
