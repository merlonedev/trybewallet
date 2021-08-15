import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPI from '../services';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      expenses: 0,
      currencie: 'BRL',
    };
  }

  componentDidMount() {
    // fetchAPI('https://economia.awesomeapi.com.br/json/all');
  }

  render() {
    const { userEmail } = this.props;
    const { expenses, currencie } = this.state;
    return (
      <header>
        <h1>
          Header
        </h1>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field">{ expenses }</p>
        <p data-testid="header-currency-field">{ currencie }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps)(Header);
