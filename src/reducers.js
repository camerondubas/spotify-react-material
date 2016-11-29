import { combineReducers } from 'redux';

import artist from './artist/artist.reducer';
import album from './album/album.reducer';
import player from './player/player.reducer';
import authorize from './authorize/authorize.reducer';
import browse from './browse/browse.reducer';
import { routerReducer as routing } from 'react-router-redux';


export default combineReducers({
  artist,
  album,
  player,
  authorize,
  browse,
  routing
});
