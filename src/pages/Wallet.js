import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Components/Form';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <h2 data-testid="total-field">
          0
        </h2>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
