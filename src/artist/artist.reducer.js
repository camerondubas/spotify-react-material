let defaultState = {
  albums: []
};

export default function artistReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_ARTIST_ALBUMS_FULFILLED':
      return Object.assign({}, state, {albums: action.payload.items});
      break;
    default:
      return state;
  }
}
