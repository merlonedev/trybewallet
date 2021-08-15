import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  render() {
    const { getEmail } = this.props;
    const { total } = this.state;
    return (
      <div>
        <div>
          <p
            data-testid="email-field"
          >
            {`Email: ${getEmail}`}
          </p>
        </div>
        <div>
          <p>
            Despesa Total:
          </p>
          <p data-testid="total-field">
            {`R$ ${total}`}
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    getEmail: state.user.email,
  };
}

export default connect(mapStateToProps)(Wallet);
