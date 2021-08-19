import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  render() {
    const { tag, handlechange } = this.props;
    return (
      <div>
        <label htmlFor="selected-category-tag" label="Tag: ">
          Tag:
          <select
            value={ tag }
            onChange={ handlechange }
            id="selected-category-tag"
            name="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

Tag.propTypes = {
  handlechange: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Tag;
