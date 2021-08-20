import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, price } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        {price === '0' ? (<p data-testid="total-field">0</p>)
          : <p data-testid="total-field">{ price }</p>}
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  price: state.wallet.totalPrice,
});

Header.defaultProps = {
  price: '0',
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  price: PropTypes.string,
};

export default connect(mapStateToProps)(Header);
