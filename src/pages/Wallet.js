import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import Table from '../components/Table';
import JuliusPopUp from '../components/JuliusPopUp';
// prettier-ignore
class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: true,
    };

    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.setState({
      showPopup: false,
    });
  }

  render() {
    const { showPopup } = this.state;
    return (
      <div id="wallet-div">
        {showPopup && <JuliusPopUp callback={ this.closePopup } />}
        <Header />
        <ExpenseForm disableBtn={ showPopup } />
        <Table />
      </div>
    );
  }
}

export default Wallet;
