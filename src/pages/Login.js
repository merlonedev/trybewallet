import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/button';
import Input from '../components/input';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.infoCheck = this.infoCheck.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }), this.infoCheck);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/carteira');
    const { login } = this.props;
    const { email } = this.state;
    login(email);
  }

  infoCheck() {
    const { email, password } = this.state;
    const minLength = 6;
    const emailIsValid = email.includes('@') && email.includes('.com')
      && email.split('@').length === 2 && email.indexOf('@') < email.indexOf('.com');
    const passwordIsValid = password.length >= minLength;

    if (emailIsValid && passwordIsValid) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <form>
        <Input
          labelText="Email:"
          name="email"
          testId="email-input"
          inputType="email"
          inputPlaceholder="Digite aqui o seu email"
          onChange={ this.handleChange }
          value={ email }
        />
        <Input
          labelText="Senha:"
          name="password"
          testId="password-input"
          inputType="password"
          inputPlaceholder="Digite aqui a sua senha"
          onChange={ this.handleChange }
          value={ password }
        />
        <Button
          buttonText="Entrar"
          onClick={ this.handleClick }
          disabled={ disabled }
        />
      </form>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
