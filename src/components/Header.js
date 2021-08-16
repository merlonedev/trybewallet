import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { userEmail, valorTotal } = this.props;

    return (
      <header className="header">
        <label htmlFor="email-field">
          Email:
          <span
            type="text"
            id="email-field"
            data-testid="email-field"
            readOnly
          >
            { userEmail }
          </span>
        </label>
        <label htmlFor="total">
          Total:
          <span
            id="total"
            data-testid="total-field"
          >
            { valorTotal }
          </span>
        </label>
        <label htmlFor="exchange">
          Exchange:
          <input
            type="text"
            id="exchange"
            data-testid="header-currency-field"
            value="BRL"
            readOnly
          />
        </label>
      </header>
    );
  }
}
Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
