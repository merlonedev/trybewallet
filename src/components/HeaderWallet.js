import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderWallet extends React.Component {
  renderUserSpecs() {
    const { user: { email }, sumTotalExpense } = this.props;
    return (
      <main>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="header-currency-field">BRL</span>
        <span data-testid="total-field">{ sumTotalExpense }</span>
      </main>
    );
  }

  render() {
    return this.renderUserSpecs();
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

HeaderWallet.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  sumTotalExpense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(HeaderWallet);
