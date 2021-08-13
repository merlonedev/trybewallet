import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = ({
      despesa: 0,
    });
  }

  render() {
    const { despesa } = this.state;
    const { emailFromRedux } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          E-mail:
          {emailFromRedux}
        </p>
        <p data-testid="total-field">
          Despesas:
          {' '}
          {despesa}
        </p>
        <p data-testid="header-currency-field">
          Câmbio: BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailFromRedux: state.user.email,
});

Header.propTypes = {
  emailFromRedux: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
