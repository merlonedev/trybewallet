import React from 'react';
import logo from '../wallet.png';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const REG_EX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const passwordLength = 5;
    return (
      <form>
        <img src={ logo } width="50" alt="logo Trybe" />
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ this.handleEmail }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handlePassword }
        />
        <button
          type="submit"
          disabled={ !REG_EX_EMAIL.test(email) || password.length <= passwordLength }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
