import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  render() {
    const { handleChange,
      state: { email, password } } = this;
    return (
      <section>
        <Input
          type="email"
          name="email"
          value={ email }
          label="E-mail"
          testid="email-input"
          handleChange={ handleChange }
        />
        <Input
          type="password"
          name="password"
          value={ password }
          label="Senha"
          testid="password-input"
          handleChange={ handleChange }
        />
        <button
          type="button"
          onClick={ handleSubmit }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
