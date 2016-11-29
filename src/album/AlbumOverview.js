import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const AlbumOverview = props => (
    <div style={{
        backgroundColor: props.muiTheme.palette.primary2Color,
        color: props.muiTheme.palette.alternateTextColor,
      }}>
      <img src={props.album.images[0].url} alt={props.album.name} style={{width: '100vw', height: '100vw'}}/>

      <div style={{
        padding: '2rem 1.5rem',
        position: 'relative'
      }}>
        <FloatingActionButton secondary={true} style={{
          position: 'absolute',
          top: 0,
          right: '1.5rem',
          transform: 'translateY(-50%)'
        }}
        onClick={props.handleClick}>
          <AvPlayArrow />
        </FloatingActionButton>

        <h1 style={{fontSize: '2rem', fontWeight: '100', marginBottom: '.5rem'}}>{props.album.artists[0].name}</h1>
        <h3 style={{fontSize: '1rem', fontWeight: '100'}}>{props.album.name}</h3>
      </div>

    </div>
);

export default muiThemeable()(AlbumOverview);
