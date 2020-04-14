import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return [...state, state.concat(action.payload)];
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;