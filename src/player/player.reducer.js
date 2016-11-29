let defaultState = {
  track: {
    album: {},
    artists: []
  },
  visible: false,
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
    case 'UPDATE_PLAYER':
      return Object.assign({}, state, {
        duration: action.payload.duration,
        position: action.payload.position
      });
      break;
    case 'FETCH_TRACK_FULFILLED':
      return Object.assign({}, state, {track: action.payload, visible: true});
    default:
      return state;
  }
}
