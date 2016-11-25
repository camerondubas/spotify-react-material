import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ActionSettings from 'material-ui/svg-icons/action/settings';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Theme
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// TODO REACT-IZE this
let theme = getMuiTheme(lightBaseTheme);

let App = (props) => (
  <div>
    <MuiThemeProvider muiTheme={theme}>
      <AppBar title="Spotify"/>
    </MuiThemeProvider>
    <p>{props.children}</p>
  </div>
);

export default App;