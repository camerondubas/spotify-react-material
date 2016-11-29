import {applyMiddleware, createStore, compose} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(thunk, logger()));
const store = createStore(reducer, middleware);
export const history = syncHistoryWithStore(browserHistory, store);


export default store;
