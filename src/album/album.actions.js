import 'whatwg-fetch';

export function fetchAlbum(albumId) {
  return dispatch => {
    dispatch({type: 'FETCH_ALBUM_PENDING'});

    fetch(`https://api.spotify.com/v1/albums/${albumId}?market=CA`).then(
      response => response.json().then(
        data => dispatch({
            type: 'FETCH_ALBUM_FULFILLED',
            payload: data
          })
      ),
      err => dispatch({
        type: 'FETCH_ALBUM_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
