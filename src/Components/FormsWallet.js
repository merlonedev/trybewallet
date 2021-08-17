import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurriencies } from '../actions/index.login';
import InputForms from './InputForms';
import SelectPayment from './SelectPayment';
import SelectTag from './SelectTag';
import DescriptionForm from './DescriptionForm';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // balance: '',
      // description: '',
      // currency: 0,
      // payment: 'dinheiro',
      // tag: 'alimentação',
      // expencies: [],
    };
  }

  componentDidMount() {
    const { setDispatch } = this.props;
    setDispatch();
  }

  handlerChange({ target: { value, name } }) {
    this.setState = ({
      [name]: value,
    });
  }

  // handlerClick({ target: { value, name } } {
  //   [name]: value,
  // })

  render() {
    return (
      <form>
        <InputForms />
        <SelectPayment />
        <SelectTag />
        <DescriptionForm />
      </form>
    );
  }
}

FormsWallet.propTypes = {
  setDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinsMap: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  setDispatch: () => dispatch(fetchApiCurriencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
