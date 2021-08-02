import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// prettier-ignore
class Header extends React.Component {
  render() {
    const { user } = this.props;
    const { email } = user;
    return (
      <header>
        <span data-testid="email-field">
          E-mail:
          {email}
        </span>
        <span data-testid="total-field">Despesa Total: R$ 0,00</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
};
