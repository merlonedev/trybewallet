import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEntryAction } from '../actions';

class DeleteButton extends React.Component {
  render() {
    const { expense, deleteEntry } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ (e) => {
          e.preventDefault();
          deleteEntry(expense);
        } }
      >
        Deletar
      </button>
    );
  }
}

DeleteButton.propTypes = {
  expense: PropTypes.oneOfType([PropTypes.object]),
  deleteEntry: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  deleteEntry: (expense) => dispatch(deleteEntryAction(expense)),
});

export default connect(null, mapDispatchToProps)(DeleteButton);
