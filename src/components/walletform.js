import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import Select from '../Select';
import Input from '../Input';

const walletForm = (props) => {
  const { moedas, moeda, handleChange } = props;
  return (
    <form>
      <Input
        labelText={ labelText }
        type={ type }
        id={ id }
        change={ handleChange }
        key={ id }
      />
      <Select
        labelText="Moeda"
        id="moeda"
        name="moeda"
        value={ moeda }
        change={ handleChange }
        options={ moedas }
      />
      <Select 
        labelText={ labelText }
        id={ id }
        change={ handleChange }
        options={ options }
        key={ id }
      />
    </form>
  );
};

FormWallet.propTypes = {
  moedas: arrayOf(string).isRequired,
  moeda: string.isRequired,
  handleChange: func.isRequired,
};

export default walletForm;
