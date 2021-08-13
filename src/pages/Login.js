import React from 'react';

import Input from '../Components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          label="Email"
          name="email"
          testId="email-input"
          type="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          label="Senha"
          name="senha"
          testId="password-input"
          type="senha"
          value={ password }
          onChange={ this.handleChange }
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
