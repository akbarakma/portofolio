import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGE':
      return [...state, ...action.payload];
    case 'ADD_MESSAGE':
      return [action.payload, ...state];
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;