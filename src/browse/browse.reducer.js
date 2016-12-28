let defaultState = {
  featuredPlaylists: {
    playlists: {
      items: [
        {
          images: [{
            url: ''
          }],
          owner: {}
        }
      ]
    }
  },
  error: null
};

export default function browseReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_FEATURED_PLAYLISTS_FULFILLED':
      return Object.assign({}, state, {featuredPlaylists: action.payload});
      break;
    case 'FETCH_FEATURED_PLAYLISTS_REJECTED':
      return Object.assign({}, state, {error: action.payload});
      break;
    default:
      return state;
  }
}
