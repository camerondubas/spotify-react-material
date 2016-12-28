let defaultState = {
  tracks: {
    items: []
  },
  images: [{}],

  fetching: false,
  fetched: false,
  error: null
};

export default function playlistReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_PLAYLIST_PENDING' :
      return Object.assign({}, defaultState, {fetching: true});
      break;
    case 'FETCH_PLAYLIST_FULFILLED':
      return Object.assign({}, state, action.payload, {fetching: false, fetched: true});
      break;
    case 'FETCH_PLAYLIST_REJECTED':
      return Object.assign({}, state, {error: action.payload});
      break;
    default:
      return state;
  }
}
