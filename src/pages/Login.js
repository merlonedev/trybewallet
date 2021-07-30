import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      email: '',
      password: '',
      redirect: true,
    }));
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <h1>Trybe Wallet</h1>
          <label htmlFor="email-input">
            <input
              id="email-input"
              name="email"
              type="email"
              value={ email }
              data-testid="email-input"
              placeholder="E-mail"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            <input
              id="password-input"
              name="password"
              type="password"
              value={ password }
              data-testid="password-input"
              placeholder="Senha"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
