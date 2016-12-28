import 'whatwg-fetch';

export function checkAuthorization() {
  return dispatch => {
    dispatch({type: 'CHECK_AUTHORIZATION'});

    if (localStorage.getItem('token') && localStorage.getItem('expiry') > Date.now()) {
      dispatch({type: 'AUTHORIZED', payload: {authorized: true}});
    } else {
      dispatch({type: 'UNAUTHORIZED', payload: {authorized: false}});
    }
  };
}

export function authorizeUser(query) {
  return dispatch => {
    dispatch({type: 'AUTHORIZE_USER'});

    localStorage.setItem('token', query['access_token']);
    localStorage.setItem('expiry', Date.now() + (query['expires_in'] * 1000));
    localStorage.setItem('token_type', query['token_type']);

    dispatch({type: 'AUTHORIZED', payload: {authorized: true}});
  };
}