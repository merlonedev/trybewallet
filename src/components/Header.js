import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    // const { props: { userEmail, totalField, currency } } = this;
    return (
      <header>
        <aside>
          <h2 data-testid="email-field">oi mo</h2>
          <h3 data-testid="total-field">oi mo</h3>
          <h4 data-testid="header-currency-field">oi mo </h4>
        </aside>
      </header>
    );
  }
}

export default Header;

/* const { string, number } = PropTypes;

Header.propTypes = {
  userEmail: string.isRequired,
  totalField: number.isRequired,
  currency: string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
  totalField: state.wallet,
  currency: state.wallet,

}); */
// connect(mapStateToProps)(Header)
