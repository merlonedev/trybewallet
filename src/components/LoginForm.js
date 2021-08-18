import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAction } from '../actions/index';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
    });

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
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

  render() {
    const { email, password } = this.state;
    const { emailDispatch } = this.props;

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
            onClick={ () => emailDispatch(email) }
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
  userAction: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
