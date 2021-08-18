import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input id="email" type="text" data-testid="email-input" />
        </label>
        <label htmlFor="senha">
          Senha
          <input id="senha" type="text" data-testid="password-input" />
        </label>
        <button type="submit">Entrar</button>
      </form>);
  }
}

export default Login;
