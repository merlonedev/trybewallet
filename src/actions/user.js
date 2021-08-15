import { ADD_EMAIL } from './index';

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    payload: email,
  };
}

export const test = () => {

};
