import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AlbumOverview from '../album/AlbumOverview';

import {millisecondsToMinutesAndSeconds} from '../utils/time';

const Playlist = props => (
  <div>
    <AlbumOverview
      album={props.playlist}
      handleClick={props.playPlaylist}
      title={props.playlist.name}
      subtitle={props.playlist.description}
    />

    <List>
      {props.playlist.tracks.items.map((track, idx) => (
        <ListItem
          key={track.track.id || idx}
          primaryText={track.track.name}
          secondaryText={millisecondsToMinutesAndSeconds(track.track.duration_ms)}
          leftAvatar={
                <Avatar
                  color={props.muiTheme.palette.secondaryTextColor}
                  backgroundColor={'transparent'}
                >
                  {idx + 1}
                </Avatar>
               }
          onClick={props.selectTrack.bind(null, track.track)}
        >
        </ListItem>
      ))}
    </List>
  </div>
);


export default muiThemeable()(Playlist);
