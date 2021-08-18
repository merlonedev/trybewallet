import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: 'BRL',
      totalExpenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, currency } = this.state;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            E-mail:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total: R$
            { totalExpenses }
            <p>
              { currency }
            </p>
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
