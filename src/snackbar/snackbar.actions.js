export function displaySnackbar(message) {
  return dispatch => dispatch({type: 'DISPLAY_SNACKBAR', payload: {visible: true, message}});
}
export function hideSnackbar() {
  return dispatch => dispatch({type: 'HIDE_SNACKBAR', payload: {visible: false, message: ''}});
}