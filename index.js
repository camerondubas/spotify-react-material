import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//CSS
import './style/reset.css';
import './style/style.css';

import { Provider } from 'react-redux';
import store, { history } from './src/store';

import App from './src/app/App';
import Browse from './src/browse/Browse';
import Artist from './src/artist/Artist';
import Album from './src/album/Album';
import Authorize from './src/authorize/Authorize';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Browse} />
        <Route path="artist/:artistId" component={Artist}/>
        <Route path="album/:albumId" component={Album}/>
        <Route path="authorize" component={Authorize}/>
      </Route>
    </Router>
  </Provider>
  , app);
