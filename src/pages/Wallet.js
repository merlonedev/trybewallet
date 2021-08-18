import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <button
          type="button"
          data-testid="delete-btn"
          onClick={ () => expenseToDelete({ index }) }
        >
          X
        </button>
      </div>
    );
  }
}

export default Wallet;
