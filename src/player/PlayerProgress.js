import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import LinearProgress from 'material-ui/LinearProgress';

const PlayerProgress = props => (
    <LinearProgress
      mode="determinate"
      min={0}
      max={props.duration}
      value={props.position}
      color={props.muiTheme.palette.accent1Color}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 0
      }}
    />
);

export default muiThemeable()(PlayerProgress);