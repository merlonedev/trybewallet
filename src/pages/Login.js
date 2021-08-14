import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          placeholder="Password"
          data-testid="password-input"
        />
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
