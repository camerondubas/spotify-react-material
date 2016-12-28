import React from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

import SearchBar from '../search/SearchBar';
import Player from '../player/Player';
import Loader from '../loader/Loader';

import { checkAuthorization } from '../authorize/autorize.actions';
import { hideSnackbar } from '../snackbar/snackbar.actions';

@connect(store => ({
  snackbar: store.snackbar,
  authorize: store.authorize,
  player: store.player,
  app: store.app,
}))

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(checkAuthorization());
  }

  componentDidMount() {
    setTimeout(() => {
      if (!this.props.authorize.authorized) {
        this.props.router.push('/authorize');
      }
    })
  }

  handleSnackbarClose() {
    this.props.dispatch(hideSnackbar());
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={this.props.app.theme}>
          <div>
              <SearchBar />

            <div
              className="c-main-area"
              style={{
              paddingTop: 64,
              marginBottom: this.props.player.visible ? 80 : 0
              }}
            >
              {this.props.children}
            </div>

            <Player />
            <Loader />
            <Snackbar
              open={this.props.snackbar.visible}
              message={this.props.snackbar.message}
              autoHideDuration={this.props.snackbar.duration}
              onRequestClose={this.handleSnackbarClose.bind(this)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}