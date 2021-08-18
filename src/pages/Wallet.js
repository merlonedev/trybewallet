import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../forms/input';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          <h1>Wallet</h1>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">{ value }</div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
        <Input />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
