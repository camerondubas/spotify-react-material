import React from 'react';
import { connect } from 'react-redux';

import { playTrack, expandPlayer } from '../player/player.actions';
import { fetchTrack } from './track.actions';

@connect(store => ({
  album: store.album
}))
class Track extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTrack(this.props.params.trackId)).then(data => {
      this.props.dispatch(playTrack(data.payload));
      this.props.dispatch(expandPlayer(3000));
    })
  }


  render() {
    return  <div>TRACK PAGE</div>
  }
};

export default Track;
