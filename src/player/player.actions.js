import 'whatwg-fetch';

export function playTrack(track) {
  return dispatch => {
    dispatch({type: 'PLAY_TRACK', payload: track});
  };
}

export function pauseTrack(track) {
  return dispatch => {
    dispatch({type: 'PAUSE_TRACK', payload: track});
  };
}

export function updatePlayer(audioData) {
  return dispatch => {
    dispatch({type: 'UPDATE_PLAYER', payload: audioData});
  };
}

export function expandPlayer(delay = 3000) {
  return dispatch => {
    dispatch({type: 'EXPANDING_PLAYER'});
    setTimeout(() => dispatch({type: 'EXPANDED_PLAYER'}), delay);
  };
}

export function contractPlayer(delay = 3000) {
  return dispatch => {
    dispatch({type: 'CONTRACTED_PLAYER'});
  };
}
