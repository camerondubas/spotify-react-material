let defaultState = {
  items: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function artistAlbumsReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_ARTIST_ALBUMS_PENDING':
      return Object.assign({}, state, {fetching: true});
      break;
    case 'FETCH_ARTIST_ALBUMS_FULFILLED':
      return Object.assign({}, state, action.payload, {fetching: false, fetched: true});
      break;
    default:
      return state;
  }
}
