import React from 'react';
import Button from '../components/button';
import Input from '../components/input';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input
          label="Email:"
          name="email"
          testId="email-input"
          inputTyes="email"
          inputPlaceholder="Email"
          onChange={ console.log }
        />
        <Input
          label="Senha:"
          name="password"
          testId="password-input"
          inputTyes="password"
          inputPlaceholder="Senha"
          onChange={ console.log }
        />
        <Button
          button="Entrar"
          onClick={ console.log }
        />
      </div>
    );
  }
}

export default Login;
