let defaultState = {
  visible: false,
  message: '',
  duration: 3000
};

export default function loaderReducer(state = defaultState, action) {
  switch (action.type) {
    case 'DISPLAY_SNACKBAR':
    case 'HIDE_SNACKBAR':
      return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
  }
}
