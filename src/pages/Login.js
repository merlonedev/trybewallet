import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.validationLogin = this.validationLogin.bind(this);
  }

  handlerChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.validationLogin);
  }

  // https://stackoverflow.com/questions/32004990/javascript-regular-expression-validation
  validationLogin() {
    const { email, password } = this.state;
    const numberValidation = 6;
    const regexValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexEmail = regexValidation.test(email);

    if (password.length >= numberValidation && regexEmail) {
      this.setState({ redirect: true });
    } else (this.setState({ redirect: false }));
  }

  render() {
    const { redirect } = this.state;
    return (
      <>
        <form>
          <h2>Trybe Wallet</h2>
          <label htmlFor="email-input">
            <input
              name="email"
              type="email"
              data-testid="email-input"
              onChange={ this.handlerChange }
            />
          </label>
          <label htmlFor="password-input">
            <input
              name="password"
              type="password"
              data-testid="password-input"
              onChange={ this.handlerChange }
            />
          </label>
        </form>
        <button
          type="button"
          disabled={ !redirect }
        >
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
