import React from 'react';
import Button from './Button';

class DelEditButton extends React.Component {
  render() {
    return (
      <>
        <td>
          Real
        </td>
        <td>
          <Button disabled={ false } />
        </td>
      </>
    );
  }
}

export default DelEditButton;
