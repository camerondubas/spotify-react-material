import 'whatwg-fetch';

export function fetchPictures(config) {
  return dispatch => {
    config = Object.assign({page: 1}, config);

    dispatch({type: 'FETCH_PICTURES_PENDING'});

    fetch(`https://pixabay.com/api/?key=3414189-291394d470980e684b690a435&safesearch=true&category=animals&q=puppy&page=${config.page}&per_page=10`).then(
      response => response.json().then(
        data => dispatch({
          type: 'FETCH_PICTURES_FULFILLED',
          payload: data,
          pages: config.page
        })
      ),
      err => dispatch({
        type: 'FETCH_PICTURES_REJECTED',
        payload: 'Error fetching pictures'
      })
    );
  };
}

export function selectPicture(index) {
  return {type: 'SELECT_PICTURE', payload: {selectedIdx: index}};
}

export function deselectPicture(index) {
  return {type: 'DESELECT_PICTURE', payload: {selectedIdx: null}};
}

export function changePicture(idx) {
  return {type: 'CHANGE_SELECTED_PICTURE', payload: {selectedIdx: idx}};
}