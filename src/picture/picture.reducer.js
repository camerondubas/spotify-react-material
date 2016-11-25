const defaultState = {
  pictures: [],
  selectedIdx: null,
  pages: 0,
  fetching: false,
  fetched: false,
  error: null
};

export default function picturesReducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_PICTURES_PENDING':
      return Object.assign({}, state, {fetching: true, error: null});
      break;
    case 'FETCH_PICTURES_FULFILLED':
      return Object.assign({}, {
        fetching: false,
        fetched: true,
        pictures: [...state.pictures , ...action.payload.hits],
        pages: action.pages
      });
      break;
    case 'FETCH_PICTURES_REJECTED':
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        error: action.payload
      });
      break;
    case 'SELECT_PICTURE':
    case 'DESELECT_PICTURE':
    case 'CHANGE_SELECTED_PICTURE':
      return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
  }
}
