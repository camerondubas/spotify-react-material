//TODO: Document this, cause, WHAT is all this nonsense?!

import {applyMiddleware, createStore} from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = applyMiddleware(routerMiddleware(browserHistory), thunk, logger());
const store = createStore(reducer, middleware);
export const history = syncHistoryWithStore(browserHistory, store);


export default store;
