import 'whatwg-fetch';

export function fetchArtistAlbums() {
  return dispatch => {
    dispatch({type: 'FETCH_ARTIST_ALBUMS_PENDING'});

    fetch(`https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/albums`).then(
      response => response.json().then(
        data => dispatch({
          type: 'FETCH_ARTIST_ALBUMS_FULFILLED',
          payload: data,
        })
      ),
      err => dispatch({
        type: 'FETCH_ARTIST_ALBUMS_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
