import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router';
import { history } from '../../../../utils/browser';
import configureStore from '../configureStore';
import routes from './routes';

const initialState = window.__INITIAL_STATE__;

// specific module reducers 'setting'.
const store = configureStore('product', initialState);

const rootElement = document.getElementById('react-view');

React.render(
  <Provider store={store}>
    {<Router children={routes()} history={history}/>}
  </Provider>,
  rootElement
);
