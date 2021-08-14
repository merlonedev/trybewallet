import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { user, password } = this.state;
    return (
      <section className="login-input">
        <input
          name="user"
          onChange={ this.handleChange }
          value={ user }
          type="email"
          placeholder="Usuário"
          data-testid="email-input"
        />
        <input
          name="password"
          onChange={ this.handleChange }
          value={ password }
          type="password"
          placeholder="password"
          data-testid="password-input"
        />
        <button
          onClick={ () => { this.toQuestions(); } }
          type="button"
          disabled={ password.length === 0 || user.length === 0 }
        >
          Entrar
        </button>
      </section>
    );
  }
}

export default Login;
