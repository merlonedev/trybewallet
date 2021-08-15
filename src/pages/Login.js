import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <label htmlFor="input-password">
          <input
            id="input-password"
            type="password"
            password="name"
            data-testid="password-input"
          />
        </label>
        <label htmlFor="input-email">
          <input
            type="email"
            name="email"
            id="input-email"
            data-testid="email-input"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}
