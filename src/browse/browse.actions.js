import 'whatwg-fetch';

export function fetchFeaturedPlaylists() {
  return dispatch => {
    dispatch({type: 'FETCH_FEATURED_PLAYLISTS_PENDING'});

    fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=CA`,
      {
        headers: {
          'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}`
        }
      }).then(
      response => response.json().then(
        data => dispatch({
          type: 'FETCH_FEATURED_PLAYLISTS_FULFILLED',
          payload: data
        })
      ),
      err => dispatch({
        type: 'FETCH_FEATURED_PLAYLISTS_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
