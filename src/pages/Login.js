import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      btnLock: true,
      password: '',
      redirect: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.btnCondition = this.btnCondition.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      redirect: 'wallet',
    });
  }

  btnCondition() {
    const lenPassword = 6;
    const { email, btnLock, password } = this.state;

    const validEmail = /\S+@\S+\.\S+/.test(email);
    const validPswd = password.length >= lenPassword;

    if (btnLock) {
      return (validEmail && validPswd) ? this.setState({ btnLock: false }) : btnLock;
    }
    if (btnLock === false) {
      return (!(validEmail && validPswd)) ? this.setState({ btnLock: true }) : btnLock;
    }

    return btnLock;
  }

  render() {
    const { redirect } = this.state;

    if (redirect === 'wallet') {
      return <Redirect to="/carteira" />;
    }

    return (
      <form
        onSubmit={ (e) => this.handleClick(e) }
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={ this.handleChange }
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={ this.handleChange }
          data-testid="password-input"
        />
        <button
          type="submit"
          disabled={ this.btnCondition() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
