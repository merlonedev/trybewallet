import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { removeExpense } from '../actions';

class DelEditButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const { props: { deleteDispatch, info } } = this;
    // console.log(this.props);

    deleteDispatch(info);
  }

  render() {
    return (
      <>
        <td>
          Real
        </td>
        <td>
          <Button
            disabled={ false }
            testId="delete-btn"
            type="button"
            name="Excluir"
            deleteFunc={ this.handleDelete }
          />
        </td>
      </>
    );
  }
}

const { func, number } = PropTypes;
DelEditButton.propTypes = {
  deleteDispatch: func.isRequired,
  info: number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (info) => dispatch(removeExpense(info)),
});

export default connect(null, mapDispatchToProps)(DelEditButton);
