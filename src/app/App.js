import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import Player from '../player/Player';
import {Link} from 'react-router';

import {checkAuthorization} from '../authorize/autorize.actions';

// Theme
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// TODO REACT-IZE this
let theme = getMuiTheme(lightBaseTheme);

@connect(store => ({}))
export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(checkAuthorization());

  }
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Link to="/">
              <AppBar
                title="Spotify"
                style={{position:'fixed'}}
                iconElementLeft={<div></div>}
                iconElementRight={<IconButton><ActionSearch color="#fff"/></IconButton>}
              />

            </Link>

            <div
              className="c-main-area"
              style={{paddingTop: 64}}
            >
              {this.props.children}
            </div>

            <Player />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}