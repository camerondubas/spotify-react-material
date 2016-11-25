import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router'


//CSS
import './style/reset.css';
import './style/style.css';

import { Provider } from 'react-redux';
import store, { history } from './src/store';

import App from './src/app/App';
import Home from './src/home/Home';
import Artist from './src/artist/Artist';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="artist/:artistId" component={Artist}/>
      </Route>
    </Router>
  </Provider>
  , app);
