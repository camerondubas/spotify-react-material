let defaultState = {
  featuredPlaylists: {
    playlists: {
      items: [
        {
          images: [{
            url: ''
          }]
        }
      ]
    }
  },
};

export default function browseReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_FEATURED_PLAYLISTS_FULFILLED':
      console.log(action.payload);
      return Object.assign({}, state, {featuredPlaylists: action.payload});
      break;
    default:
      return state;
  }
}
