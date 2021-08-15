import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

const rootReducer = combineReducers({ user, wallet });

/*
importar o combine reducer
importar o combine use
importar o combine wallet ( { user, wallet})

*/
export rootReducer;
