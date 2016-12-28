import React from 'react';
import { connect } from 'react-redux';

import Playlist from './Playlist';
import { fetchPlaylist } from './playlist.actions';
import { playTrack } from '../player/player.actions';
import { displaySnackbar } from '../snackbar/snackbar.actions';

@connect(store => ({
  playlist: store.playlist,
  user: store.user
}))
class PlaylistContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPlaylist(this.props.params.playlistUserId, this.props.params.playlistId));
  }

  selectTrack(track) {
    this.props.dispatch(playTrack(track));
  }

  playPlaylist() {
    this.props.dispatch(displaySnackbar('This feature is not yet implemented'))
  }

  render() {
    return  <Playlist
      playlist={this.props.playlist}
      selectTrack={this.selectTrack.bind(this)}
      playPlaylist={this.playPlaylist.bind(this)}
    />
  }
};

export default PlaylistContainer;
