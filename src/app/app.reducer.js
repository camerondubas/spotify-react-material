import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

let theme = getMuiTheme(lightBaseTheme);

let defaultState = {
  error: null,

  title: 'Spotify',
  bgColor: theme.appBar.color,
  textColor: theme.appBar.textColor,

  theme
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {

    case 'UPDATE_APPBAR':
      return Object.assign({}, state, action.payload);
    case 'DEFAULT_APPBAR':
      return defaultState;
    default:
      return state;
  }
}
