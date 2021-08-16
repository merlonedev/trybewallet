import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addEmail } from '../actions';

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
    const { includeEmail } = this.props;
    const { redirect, email } = this.state;

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
          onClick={ () => includeEmail(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  includeEmail: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    includeEmail: (email) => dispatch(addEmail(email)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
