import 'whatwg-fetch';

export function fetchUser() {
  return dispatch => {
    dispatch({type: 'FETCH_USER_PENDING'});

    return fetch(`https://api.spotify.com/v1/me`,
      {
        headers: {
          'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}`
        }
      }).then(
      response => response.json().then(
        data => dispatch({
          type: 'FETCH_USER_FULFILLED',
          payload: data
        })
      ),
      err => dispatch({
        type: 'FETCH_USER_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
