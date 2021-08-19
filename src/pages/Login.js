import React from 'react';
import logo from '../wallet.png';

class Login extends React.Component {
  render() {
    return (
      <form>
        <img src={ logo } width="50" alt="logo Trybe" />
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
        />
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
