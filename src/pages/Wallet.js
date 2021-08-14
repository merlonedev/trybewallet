import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../component/form';

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
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
