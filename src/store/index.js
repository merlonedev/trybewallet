import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReduce from '../reducers';

const store = createStore(rootReduce, applyMiddleware(thunk));

export default store;
