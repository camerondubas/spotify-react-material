import  'whatwg-fetch';
import {goBack} from 'react-router-redux';

export function updateAppBar(payload) {
  return dispatch => {
    if (payload) {
      dispatch({type: 'UPDATE_APPBAR', payload});
    } else {
      dispatch({type: 'DEFAULT_APPBAR'});
    }
  };
}

export function historyBack(pathname) {
  return dispatch => {
    if (pathname !== '/') {
      dispatch(goBack());
    }
  }
}