let defaultState = {
  visible: false
};

export default function loaderReducer(state = defaultState, action) {
  switch (action.type) {
    case 'DISPLAY_LOADER':
    case 'HIDE_LOADER':
      return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
  }
}
