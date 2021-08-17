import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        {/* <img /> */}
        <span data-testid="email-field" />
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field" />
      </header>
    );
  }
}
