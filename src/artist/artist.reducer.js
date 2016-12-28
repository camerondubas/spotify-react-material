// let defaultState = {
//   albums: {
//     items: [],
//     fetching: false,
//     fetched: false,
//     error: null
//   }
// };
//
// export default function artistReducer(state = {}, action) {
//   switch (action.type) {
//     case 'FETCH_ARTIST_ALBUMS_PENDING':
//       return Object.assign({}, state,
//         {
//           albums: {fetching: true}
//         }
//       );
//       break;
//     case 'FETCH_ARTIST_ALBUMS_FULFILLED':
//       return Object.assign({}, state, {albums: action.payload}, {albums: {metadata: {fetching: false, fetched: true}}});
//       break;
//     default:
//       return state;
//   }
// }
