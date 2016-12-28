import React from 'react';
import { connect } from 'react-redux';

import Album from './Album';
import { fetchAlbum } from './album.actions';
import { playTrack } from '../player/player.actions';
import { displaySnackbar } from '../snackbar/snackbar.actions';

@connect(store => ({
  album: store.album
}))
class AlbumContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchAlbum(this.props.params.albumId));
  }

  selectTrack(track) {
    this.props.dispatch(playTrack(track));
  }

  playAlbum() {
    this.props.dispatch(displaySnackbar('This feature is not yet implemented'))
  }

  render() {
    return  <Album
      album={this.props.album}
      playAlbum={this.playAlbum.bind(this)}
      selectTrack={this.selectTrack.bind(this)}
    />
  }
};

export default AlbumContainer;
