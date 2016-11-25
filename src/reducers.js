import { combineReducers } from 'redux';

import pictures from './picture/picture.reducer';
import { routerReducer as routing } from 'react-router-redux';


export default combineReducers({
  pictures,
  routing
});
