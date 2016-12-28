import { combineReducers } from 'redux';

import artist from './artist/artist.reducer';
import app from './app/app.reducer';
import artistAlbums from './artist/artistAlbums.reducer';
import album from './album/album.reducer';
import player from './player/player.reducer';
import authorize from './authorize/authorize.reducer';
import browse from './browse/browse.reducer';
import loader from './loader/loader.reducer';
import snackbar from './snackbar/snackbar.reducer';
import user from './user/user.reducer';
import playlist from './playlist/playlist.reducer'
import search from './search/search.reducer';
import { routerReducer as routing } from 'react-router-redux';


export default combineReducers({
  app,
  artist,
  artistAlbums,
  album,
  player,
  authorize,
  browse,
  loader,
  snackbar,
  user,
  playlist,
  search,
  routing
});
