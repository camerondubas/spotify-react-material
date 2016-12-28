export function displayLoader() {
  return dispatch => dispatch({type: 'DISPLAY_LOADER', payload: {visible: true}});
}

export function hideLoader() {
  return dispatch => dispatch({type: 'HIDE_LOADER', payload: {visible: false}});
}
