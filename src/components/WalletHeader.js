import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './WalletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header className="container">
        {/* <img src="../images/no.gif" alt="No money gif" /> */}
        <div className="container">
          Email:
          <p data-testid="email-field">
            { email }
          </p>
        </div>
        <div className="container">
          <p>
            Despesa Total:
          </p>
          <p data-testid="total-field">
            0
          </p>
        </div>
        <div className="container">
          <p>
            Moeda:
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(WalletHeader);
