import { combineReducers } from 'redux';
import Wallet from '../pages/Wallet';
import user from './user';

const rootReducer = combineReducers({
  user,
  Wallet,
});

export default rootReducer;
