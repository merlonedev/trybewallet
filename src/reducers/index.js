import { combineReducers } from 'redux';
import reducer from './user';

const rootReducer = combineReducers({ reducer });

export default rootReducer;

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
