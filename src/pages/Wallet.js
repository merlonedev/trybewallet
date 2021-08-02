import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }
  
  render() {
    const { total } = this.state;
    const { userEmail } = this.props;
    
    return (
      <div>
        <header>
          <p
            data-testid="email-field"
            >
            {`Email: ${userEmail}`}
          </p>
          <p
            data-testid="total-field"
            >
            {`Despesa Total: ${total}`}
          </p>
          <p
            data-testid="header-currency-field"
            >
              BRL
            </p>
        </header>
    </div>
    );
  }
}

export default Wallet;
