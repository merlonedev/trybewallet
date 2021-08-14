import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { userEmail } = this.props;
    const despesa = 0;
    return (
      <div>
        <header>
          <h1
            data-testid="email-field"
          >
            { userEmail }
          </h1>
          <p data-testid="total-field">
            despesas total: $
            { despesa }
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
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
