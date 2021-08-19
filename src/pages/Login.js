import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      senha: '',
    };
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  handleClick() {

  }

  render() {
    const { email, senha } = this.state;

    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="text"
            data-testid="email-input"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            id="senha"
            type="text"
            data-testid="password-input"
            value={ senha }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button type="submit" onClick={ this.handleClick }>Entrar</button>
      </form>);
  }
}

export default Login;
