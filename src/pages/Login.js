import React from 'react';
import Button from '../components/button';
import Input from '../components/input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.infoCheck = this.infoCheck.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }), this.infoCheck);
  }

  handleClick(event) {
    event.preventDefault();
  }

  infoCheck() {
    const { email, password } = this.state;
    const minLength = 6;
    const emailIsValid = email.includes('@') && email.includes('.com')
      && email.split('@').length === 2 && email.indexOf('@') < email.indexOf('.com');
    const passwordIsValid = password.length >= minLength;

    if (emailIsValid && passwordIsValid) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <form>
        <Input
          label="Email:"
          name="email"
          testId="email-input"
          inputTyes="email"
          inputPlaceholder="Email"
          onChange={ this.handleChange }
          value={ email }
        />
        <Input
          label="Senha:"
          name="password"
          type="password"
          testId="password-input"
          inputTyes="password"
          inputPlaceholder="Senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <Button
          button="Entrar"
          onClick={ this.handleClick }
          disabled={ disabled }
        />
      </form>
    );
  }
}

export default Login;
