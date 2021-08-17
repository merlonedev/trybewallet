import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <h1>Trybe-Wallet</h1>
        <label htmlFor="email-input">
          Email:
          <br />
          <input
            type="text"
            data-testid="email-input"
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha:
          <br />
          <input
            type="password"
            data-testid="password-input"
          />
        </label>
        <br />
        <button
          type="button"
        >
          ENTRAR
        </button>
      </main>
    );
  }
}

export default Login;
