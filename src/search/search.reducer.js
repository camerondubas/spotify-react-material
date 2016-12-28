let defaultState = {
  active: false,
  fetching: false,
  fetched: false,
  error: null,

  results: {
    albums: {},
    artist: {},
    playlists: {},
    tracks: {}
  },
  recentSearches: []
};

export default function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case 'DISPLAY_SEARCH':
    case 'HIDE_SEARCH':
    case 'DELETE_SEARCH_HISTORY':
      return Object.assign({}, state, action.payload);
      break;
    case 'SEARCH_PENDING':
      return Object.assign({}, state, {results: {}, fetching: true});
    case 'SEARCH_FULFILLED':
      return Object.assign({}, state, {
        results: action.payload,
        title: 'Search Results',

        active: false,
        fetched:true,
        fetching: false
      });
    default:
      return state;
  }
}
