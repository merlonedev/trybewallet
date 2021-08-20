import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field"> Total = 0</span>
        <span data-testid="header-currency-field"> BRL </span>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
