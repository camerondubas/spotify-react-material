let defaultState = {
  track: {
    album: {},
    artists: []
  },
  visible: false,
  expanded: false,
  expanding: false,
  status: 'STOPPED'
};

export default function playerReducer(state = defaultState, action) {
  switch (action.type) {
    case 'PLAY_TRACK':
      return Object.assign({}, state, {
        track: action.payload,
        visible: true,
        status: 'PLAYING'
      });
      break;
    case 'PAUSE_TRACK':
      return Object.assign({}, state, {
        track: action.payload,
        visible: true,
        status: 'PAUSED'
      });
      break;
    case 'EXPANDING_PLAYER':
      return Object.assign({}, state, {
        expanding: true,
        expanded: false
      });
      break;
    case 'EXPANDED_PLAYER':
      return Object.assign({}, state, {
        expanded: true,
        expanding: false
      });
      break;
    case 'CONTRACTED_PLAYER':
      return Object.assign({}, state, {
        expanded: false,
        expanding: false
      });
      break;
    case 'UPDATE_PLAYER':
      return Object.assign({}, state, {
        duration: action.payload.duration,
        position: action.payload.position
      });
      break;
    case 'FETCH_TRACK_FULFILLED':
      return Object.assign({}, state, {track: action.payload, visible: true});
      break;
    default:
      return state;
  }
}
