import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <>
        <form>
          <h2>Trybe Wallet</h2>
          <label htmlFor="email-input">
            <input
              name="email"
              type="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            <input
              name="password"
              type="password"
              data-testid="password-input"
            />
          </label>
        </form>
        <button
          type="button"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
