import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      validation: {
        emailIsValid: false,
        passwordIsValid: false,
      },
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleEmail({ target: { name, value } }) {
    const emailRegex = /[\w,\W]+@[\w,\W]+\.com/gm;
    this.setState((prevState) => ({
        validation: {
          ...prevState.validation,
          emailIsValid: emailRegex.test(value),
        },
    }));
    this.handleChange(name, value);
  }

  handlePassword({ target: { name, value } }) {
    const bool = (value.length && value.length >= 6);
    this.setState((prevState) => ({
      validation: {
        ...prevState.validation,
        passwordIsValid: bool,
      },
  }));
    this.handleChange(name, value);
  }
  render() {
    const { email, password, validation: { emailIsValid, passwordIsValid } } = this.state;
    const { handleEmail, handlePassword } = this;
    return (
      <section>
        <Input dataTestId="email-input" placeholder="e-mail" name="email" onChange={ handleEmail } value={ email } />
        <Input dataTestId="password-input" placeholder="senha" name="password" onChange={ handlePassword } value={ password } />
        <Link>
          <button type="button" disabled={ !(emailIsValid && passwordIsValid) }>
            Entrar
          </button>
        </Link>
      </section>);
  }
}

export default Login;
