import React from 'react';
import { connect } from 'react-redux';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Snackbar from 'material-ui/Snackbar';
import AlbumOverview from './AlbumOverview';

import { fetchAlbum } from './album.actions';
import { playTrack } from '../player/player.actions';


import {millisecondsToMinutesAndSeconds} from '../utils/time';

@connect(store => ({
  album: store.album
}))
class Album extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchAlbum(this.props.params.albumId));
  }

  selectTrack(track) {
    console.log('select track');
    console.log(track);
    this.props.dispatch(playTrack(track));
  }

  playAlbum() {
    console.log('playAlbmi');
    this.openSnackbar = true;
    this.snackbarMessage = 'This functionality is not yet implemented';
    this.forceUpdate();
  }

  render() {
    let album = this.props.album || {};
    return (
      <div>

        {album.images && <AlbumOverview album={album} handleClick={this.playAlbum.bind(this)} />}

        <List>
          {album.tracks.items.map((track, idx) => (
            <ListItem
              key={track.id}
              primaryText={track.name}
              secondaryText={millisecondsToMinutesAndSeconds(track.duration_ms)}
              leftAvatar={
                <Avatar color={this.props.muiTheme.palette.secondaryTextColor} backgroundColor={'transparent'}>
                  {idx + 1}
                </Avatar>
               }
              onClick={this.selectTrack.bind(this, track)}
            >
              </ListItem>
          ))}
        </List>

        <Snackbar
          open={this.openSnackbar || false}
          message={this.snackbarMessage || ''}
          autoHideDuration={4000}
        />
      </div>
    );
  }
};

export default muiThemeable()(Album);
