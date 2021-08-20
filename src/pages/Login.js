import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      email: '',
      senha: '',
      disable: true,
      redirect: false,
    };
  }

  componentDidUpdate() {
    const { email, senha, disable } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    const emailValidation = emailRegex.test(email);

    const valido = true;
    const MIN_PASSWORD = 6;
    const passValidation = ((senha.length >= MIN_PASSWORD) ? valido : false);

    if (disable) {
      return (emailValidation && passValidation) ? this.validate() : disable;
    }
  }

  validate() {
    this.setState({
      disable: false,
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  handleClick(callBack, email) {
    callBack(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, senha, disable, redirect } = this.state;
    const { loginDispatch } = this.props;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
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
        <button
          disabled={ disable }
          type="submit"
          onClick={ () => this.handleClick(loginDispatch, email) }
        >
          Entrar
        </button>
      </form>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (state) => dispatch(loginAction(state)),
});

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
