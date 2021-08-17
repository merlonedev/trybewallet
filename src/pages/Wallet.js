import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">{`E-mail: ${email}`}</p>
          <p data-testid="total-field">Gasto total: 0 </p>
          <p data-testid="header-currency-field">Câmbio atual: BRL </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
