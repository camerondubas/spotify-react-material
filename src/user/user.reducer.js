let defaultState = {
  id: undefined,

  fetching: false,
  fetched: false,
  error: null
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return Object.assign({}, state, action.payload);
      break;
    case 'FETCH_USER_REJECTED':
      return Object.assign({}, state, {error: action.payload});
      break;
    default:
      return state;
  }
}
