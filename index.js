import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store, { history } from './src/store';

import App from './src/app/App';
import Browse from './src/browse/Browse';
import ArtistContainer from './src/artist/ArtistContainer';
import AlbumContainer from './src/album/AlbumContainer';
import PlaylistContainer from './src/playlist/PlaylistContainer';
import Authorize from './src/authorize/Authorize';
import Track from './src/track/Track';
import SearchResults from './src/search/SearchResults';
import {handleUpdate} from './src/utils/router';

import './style/reset.css';
import './style/style.css';

injectTapEventPlugin();

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={handleUpdate}>
      <Route path="/" component={App}>
        <IndexRoute component={Browse} />
        <Route path="artist/:artistId" component={ArtistContainer}/>
        <Route path="album/:albumId" component={AlbumContainer}/>
        <Route path="track/:trackId" component={Track}/>
        <Route path="playlist/:playlistUserId/:playlistId" component={PlaylistContainer}/>
        <Route path="search/:searchQuery" component={SearchResults}/>
        <Route path="authorize" component={Authorize}/>
      </Route>
    </Router>
  </Provider>
  , app);

// Sound Manager
// This stops constant printing of debug messages to the console
soundManager.debugMode = false;