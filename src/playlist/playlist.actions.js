import 'whatwg-fetch';

export function fetchPlaylist(userId, playlistId) {
  return dispatch => {
    dispatch({type: 'FETCH_PLAYLIST_PENDING'});

    fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}?market=CA`,
      {
        headers: {
          'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}`
        }
      }).then(
      response => response.json().then(
        data => {
          if (data.error) {
            dispatch({
              type: 'FETCH_PLAYLIST_REJECTED',
              payload: data.error

            })
          } else {
            dispatch({
              type: 'FETCH_PLAYLIST_FULFILLED',
              payload: data
            })
          }
        }
      ),
      err => dispatch({
        type: 'FETCH_PLAYLIST_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
