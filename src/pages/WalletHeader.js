import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    // const { email, total, currency } = this.props;
    const total = 0;
    const { email } = this.props;
    const currency = 'BRL';
    return (
      <header>
        {/* <section name="logo-container" ></section> */}
        <section name="data-container" className="data-container">
          <label
            htmlFor="email-field"
          >
            E-mail:
            <h4 name="email-field" data-testid="email-field">{ email }</h4>
          </label>
          <label
            htmlFor="total-field"
          >
            Total:
            <h4 name="total-field" data-testid="total-field">{ total }</h4>
          </label>
          <label
            htmlFor="header-currency-field"
          >
            Moeda para câmbio:
            <h4 name="header-currency-field" data-testid="header-currency-field">
              { currency }
            </h4>
          </label>
        </section>
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

export default connect(mapStateToProps)(WalletHeader);
