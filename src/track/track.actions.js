import 'whatwg-fetch';

export function fetchTrack(trackId) {
  return dispatch => {
    dispatch({type: 'FETCH_TRACK_PENDING'});

    return fetch(`https://api.spotify.com/v1/tracks/${trackId}?market=CA`).then(
      response => response.json().then(
        data => dispatch({
          type: 'FETCH_TRACK_FULFILLED',
          payload: data
        })
      ),
      err => dispatch({
        type: 'FETCH_TRACK_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
