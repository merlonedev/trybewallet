import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelInput extends Component {
  render() {
    const { htmlFor, type, id, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ htmlFor }>
          {id}
          <input
            type={ type }
            name={ id }
            id={ id }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

LabelInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelInput;
