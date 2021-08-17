import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: 'BRL',
      total: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { coins, total } = this.state;
    return (
      <header>
        {/* <img /> */}
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          { total }
        </span>
        <span data-testid="header-currency-field">
          {coins}
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  // coins: PropTypes.string.isRequired,
  // total: PropTypes.number.isRequired,
};
