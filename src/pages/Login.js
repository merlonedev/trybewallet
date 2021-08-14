import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';
import addUser from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
    this.accessValidation = this.accessValidation.bind(this);

    this.state = {
      email: '',
      password: '',
      validation: true,
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
    const { accessValidation } = this;

    this.setState((state) => ({ ...state, [name]: newValue() }),
      () => accessValidation());
  }

  accessValidation() {
    const { state: { password, email } } = this;
    const MINIMUM_SIZE = 6;
    const VALIDATION_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (password.length >= MINIMUM_SIZE && email.match(VALIDATION_EMAIL)) {
      this.setState({
        validation: false,
      });
    }
  }

  handleSubmit() {
    const {
      props: { history, setUser },
      state: { email },
    } = this;

    history.push('/carteira');
    setUser(email);
  }

  render() {
    const { handleChange, handleSubmit,
      state: { email, password, validation } } = this;
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
        <Button
          handleSubmit={ handleSubmit }
          label="Entrar"
          disabled={ validation }

        />
      </section>
    );
  }
}

const { func, objectOf, shape } = PropTypes;

Login.propTypes = {
  history: objectOf(shape({
    push: func.isRequired,
  })).isRequired,
  setUser: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (state) => dispatch(addUser(state)),
});

export default connect(null, mapDispatchToProps)(Login);
