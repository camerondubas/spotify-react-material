let defaultState = {
  tracks: {
    items: []
  }
};

export default function artistReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_ALBUM_FULFILLED':
      return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
  }
}
