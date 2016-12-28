import 'whatwg-fetch';
import { push } from 'react-router-redux'
import { getJsonItem, setJsonItem } from '../utils/localStorage';


export function displaySearch() {
  return dispatch => {
    dispatch({type: 'DISPLAY_SEARCH', payload: {
      active: true,
      recentSearches: getJsonItem('recent_searches', []).reverse()
    }});
  };
}

export function hideSearch() {
  return dispatch => {
    dispatch({type: 'DEFAULT_APPBAR'});
    dispatch({type: 'HIDE_SEARCH', payload: {active: false}});
  };
}

export function deleteHistory() {
  setJsonItem('recent_searches', []);
  return dispatch => {
    dispatch({type: 'DELETE_SEARCH_HISTORY', payload: {recentSearches: getJsonItem('recent_searches', [])}});
  };
}

export function search(query) {
  return dispatch => {
    dispatch({type: 'SEARCH_PENDING'});
    dispatch({type: 'CONTRACTED_PLAYER'});

    let recentSearches = getJsonItem('recent_searches', []);
    if (recentSearches.indexOf(query) === -1) {
      recentSearches.push(query);
    }

    setJsonItem('recent_searches', recentSearches);

    fetch(`https://api.spotify.com/v1/search?q=${query}&type=album,artist,playlist,track&limit=3`).then(
      response => response.json().then(
        data => {
          if (data.error) {
            dispatch({
              type: 'SEARCH_REJECTED',
              payload: data.error
            });
          } else {
            dispatch({
              type: 'SEARCH_FULFILLED',
              payload: data
            });

            dispatch(push('/search/' + query));
          }

        }
      ),
      err => dispatch({
        type: 'SEARCH_REJECTED',
        payload: 'Error fetching artist\'s albums'
      })
    );
  };
}
