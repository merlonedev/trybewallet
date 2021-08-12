import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ));

export default store;

// import reducer from '../reducers';

// const store = createStore(
//   reducer,
//   composeWithDevTools(
//     applyMiddleware(thunk),
//   ),
// );
