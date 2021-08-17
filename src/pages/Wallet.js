import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Forms from '../components/Forms';
import { actionAddExpense, finishEdit } from '../actions/index';
import Table from '../components/Table';
import Edit from '../components/Edit';

let counter = 0;

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      price: 0,
      description: '',
      coin: 'USD',
      tag: 'Alimentação',
      payment: 'Dinheiro',
      rendered: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleClick() {
    const { addExpense } = this.props;
    const { price, description, coin, tag, payment } = this.state;
    const obj = {
      id: counter,
      value: price,
      description,
      currency: coin,
      method: payment,
      tag,
    };
    addExpense(obj);
    counter += 1;
    this.setState({
      price: 0,
      description: '',
      coin: 'USD',
      tag: 'Alimentação',
      payment: 'Dinheiro',
    });
  }

  handleEdit() {
    const { price, description, coin, tag, payment } = this.state;
    const { editFinish, itemID } = this.props;
    const obj = {
      id: itemID,
      value: price,
      description,
      currency: coin,
      method: payment,
      tag,
    };
    editFinish(obj);
  }

  renderInitialForm() {
    return (
      <div>
        <Forms handleChange={ this.handleChange } state={ this.state } />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </div>
    );
  }

  renderEditForm() {
    const { expenses, itemID } = this.props;
    const { rendered } = this.state;
    const itemFound = expenses.find((item) => item.id === itemID);
    if (!rendered) {
      this.setState({
        price: itemFound.value,
        description: itemFound.description,
        coin: itemFound.currency,
        tag: itemFound.tag,
        payment: itemFound.method,
        rendered: true,
      }, () => (
        <div>
          <Edit handleChange={ this.handleChange } state={ this.state } />
          <button onClick={ this.handleEdit } type="button">Editar despesa</button>
        </div>
      ));
    }
    return (
      <div>
        <Edit handleChange={ this.handleChange } state={ this.state } />
        <button onClick={ this.handleEdit } type="button">Editar despesa</button>
      </div>
    );
  }

  render() {
    const { edit } = this.props;

    return (
      <div>
        <Header />
        <form>
          { !edit ? this.renderInitialForm() : this.renderEditForm() }
        </form>
        <Table />
      </div>
    );
  }
}

Wallet.defaultProps = {
  edit: false,
  itemID: 0,
};

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  editFinish: PropTypes.func.isRequired,
  itemID: PropTypes.number,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  edit: state.wallet.edit,
  itemID: state.wallet.itemID,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (state) => dispatch(actionAddExpense(state)),
  editFinish: (state) => dispatch(finishEdit(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
