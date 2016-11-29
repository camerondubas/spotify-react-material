import 'whatwg-fetch';

export function fetchArtistAlbums(artistId) {
  return dispatch => {
    dispatch({type: 'FETCH_ARTIST_ALBUMS_PENDING'});
    
    fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?market=CA&album_type=album`).then(
      response => response.json().then(
        data => dispatch({
            type: 'FETCH_ARTIST_ALBUMS_FULFILLED',
            payload: data
          })
      ),
      err => dispatch({
        type: 'FETCH_ARTIST_ALBUMS_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
