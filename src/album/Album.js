import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AlbumOverview from './AlbumOverview';

import {millisecondsToMinutesAndSeconds} from '../utils/time';


const Album = props => (
  <div>
    <AlbumOverview album={props.album} handleClick={props.playAlbum} />

    <List>
      {props.album.tracks.items.map((track, idx) => (
        <ListItem
          key={track.id}
          primaryText={track.name}
          secondaryText={millisecondsToMinutesAndSeconds(track.duration_ms)}
          leftAvatar={
                <Avatar
                  color={props.muiTheme.palette.secondaryTextColor}
                  backgroundColor={'transparent'}
                >
                  {idx + 1}
                </Avatar>
               }
          onClick={props.selectTrack.bind(null, track)}
        >
        </ListItem>
      ))}
    </List>
  </div>
);


export default muiThemeable()(Album);
// <h1 style={{fontSize: '2rem', fontWeight: '100', marginBottom: '.5rem'}}>{props.album.artists[0].name}</h1>
// // <h3 style={{fontSize: '1rem', fontWeight: '100'}}>{props.album.name}</h3>