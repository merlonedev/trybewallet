import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
