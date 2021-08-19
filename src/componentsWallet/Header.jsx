import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import userReducer from '../reducers/user';
// import loginAction from '../actions';

class Header extends Component {
  render() {
    const { emailState } = this.props;

    return (
      <header>
        <h1>Header do Wallet</h1>
        <h4 data-testid="email-field">{emailState}</h4>
        <h2 data-testid="total-field" value={ 0 }>Despesa Total: </h2>
        <select data-testid="header-currency-field">
          Câmbio em uso:
          <option>BRL</option>
        </select>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email });

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
// export default Header;
