import React from 'react';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    // const { email, total, currency } = this.props;
    const total = 0;
    const email = '';
    const currency = 'BRL';
    return (
      <header>
        {/* <section name="logo-container" ></section> */}
        <section name="data-container">
          <label
            htmlFor="email-field"
          >
            E-mail:
            <h4 name="email-field" data-testid="email-fieild">{ email }</h4>
          </label>
          <label
            htmlFor="total-field"
          >
            Total:
            <h4 name="total-field" data-testid="total-fieild">{ total }</h4>
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

export default connect()(WalletHeader);
