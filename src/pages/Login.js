import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const minLenghPass = 6;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input id="email" type data-testid="email-input" onChange={ this.handleChange } />
        <input
          id="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ !(email.match(/(.*)@(.*).com/)
              && password.length >= minLenghPass) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
