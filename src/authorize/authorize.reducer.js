let defaultState = {
  authorized: false,
};

export default function authorizeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'AUTHORIZED':
    case 'UNAUTHORIZED':
      return Object.assign({}, state, {
        authorized: action.payload.authorized,
      });
      break;
    default:
      return state;
  }
}
