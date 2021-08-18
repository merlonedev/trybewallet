import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.handleButton();
  }

  handleButton() {
    const { email, password } = this.state;
    const passwordLength = 5;
    const checkEmail = /.+@.+\.[A-Za-z]+$/;
    if (checkEmail.test(email) && password.length >= passwordLength) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            value={ email }
            data-testid="email-input"
            type="email"
            id="email"
            name="email"
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            value={ password }
            data-testid="password-input"
            type="password"
            id="senha"
            name="password"
            onChange={ this.handleInput }
          />
        </label>
        <Link to="/carteira">
          <button
            disabled={ disabled }
            type="button"
            // onClick={ this.handleClick }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
