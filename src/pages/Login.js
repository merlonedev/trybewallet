import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="input-email">
          <input data-testid="email-input" type="text" />
        </label>
        <label htmlFor="input-password">
          <input data-testid="password-input" type="password" />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
