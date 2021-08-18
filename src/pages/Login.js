import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="Input-do-email">
          <input
            id="Input-do-email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="Input-de-senha">
          <input
            id="Input-de-senha"
            type="password"
            data-testid="password-input"
          />
        </label>
        <button
          id="enterButton"
          type="button"
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
