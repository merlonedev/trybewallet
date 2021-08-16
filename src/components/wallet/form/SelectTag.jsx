import React from 'react';

class SelectTag extends React.Component {
  render() {
    return (
      <label htmlFor="wallet-tag">
        Tag
        <select
          name="tag"
          id="wallet-tag"
        >
          <option value="food">Alimentação</option>
          <option value="recreation">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}

export default SelectTag;
