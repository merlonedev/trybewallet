import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction, fetchCurrencies } from '../actions/index';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
    });

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.trigger = this.trigger.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  validate(email, password) {
    const re = /\S+@\S+\.\S+/;
    const NUMBER_SIX = 6;
    if (re.test(email) && password.length >= NUMBER_SIX) {
      return true;
    }
    return false;
  }

  trigger() {
    const { emailDispatch } = this.props;
    const { email } = this.state;
    emailDispatch(email);
  }

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <input
          placeholder="Email"
          type="email"
          data-testid="email-input"
          onChange={ this.handleChange }
          name="email"
        />
        <input
          placeholder="Password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          name="password"
        />
        <Link to="/carteira">
          <input
            type="button"
            onClick={ this.trigger() }
            name="button"
            disabled={ !this.validate(email, password) }
            value="Entrar"
          />
        </Link>
      </section>
    );
  }
}

LoginForm.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userAction(email)),
  apiTrigger: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(LoginForm);
