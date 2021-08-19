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
    const { props: { deleteDispatch, target } } = this;

    deleteDispatch(target);
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
            onCLick={ this.handleDelete() }
          />
        </td>
      </>
    );
  }
}

const { number, func } = PropTypes;
DelEditButton.propTypes = {
  target: number.isRequired,
  deleteDispatch: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteDispatch: (target) => dispatch(removeExpense(target)),
});

export default connect(null, mapDispatchToProps)(DelEditButton);
