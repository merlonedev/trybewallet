import React from 'react';

import Input from '../Components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          label="Email"
          name="email"
          data-testid="email-input"
          type="email"
          value={ email }
          onChange={ () => {} }
        />
        <Input
          label="Senha"
          name="senha"
          data-testid="password-input"
          type="senha"
          value={ password }
          onChange={ () => {} }
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
