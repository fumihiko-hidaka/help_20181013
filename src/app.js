import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import SignIn from './SignIn';
import UserReducer from './UserReducer';

const store = createStore(combineReducers({
  form: reduxFormReducer,
  user: UserReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <SignIn />
  </Provider>,
  document.getElementById('app'),
);
