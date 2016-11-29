import 'whatwg-fetch';

export function checkAuthorization() {
  return dispatch => {
    dispatch({type: 'CHECK_AUTHORIZATION'});

    if (localStorage.getItem('token')) {
      dispatch({type: 'AUTHORIZED', payload: {authorized: true}});
    } else {
      dispatch({type: 'UNAUTHORIZED', payload: {authorized: false}});
    }
  };
}

export function authorizeUser() {
  return dispatch => {
    dispatch({type: 'AUTHORIZE_USER'});

    let queryObj = window.location.hash
    .substring(1)
    .split('&')
    .reduce((previous, pair) => {
      previous[pair.split('=')[0]] = pair.split('=')[1];
      return previous;
    }, {});

    localStorage.setItem('token', queryObj['access_token']);
    localStorage.setItem('expiry', Date.now() + (queryObj['expires_in'] * 1000));
    localStorage.setItem('token_type', queryObj['token_type']);

    dispatch({type: 'AUTHORIZED', payload: {authorized: true}});
  };
}