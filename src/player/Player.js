import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import Paper from 'material-ui/Paper';
import {ListItem} from 'material-ui/List';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import PlayerProgress from './PlayerProgress';

import { fetchTrack } from '../track/track.actions';
import { playTrack, pauseTrack, updatePlayer } from './player.actions';

@connect(store => ({
  player: store.player
}))
export default class Player extends React.Component {
  // Lifecycle Methods
  componentDidUpdate() {
    this.fetchTrack();
  }

  componentDidMount() {
    this.fetchTrack();
  }

  // Component Methods
  fetchTrack() {
    if (this.props.player.track.id && !this.props.player.track.album) {
      this.props.dispatch(fetchTrack(this.props.player.track.id));
    }
  }

  handlePlaying(audioData) {
    this.props.dispatch(updatePlayer(audioData));
  }

  handleClick() {
    if (this.props.player.status === 'PLAYING') {
      this.props.dispatch(pauseTrack(this.props.player.track))
    } else {
      this.props.dispatch(playTrack(this.props.player.track))
    }
  }


  render() {
    let track = this.props.player.track || {};
    let album = track.album || {};
    let artists = track.artists;
    return (
      <Paper
        zDepth={5}
        onClick={this.handleClick.bind(this)}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: '5rem',
          display: 'flex',
          transform: this.props.player.visible ? 'translateY(0)' : 'translateY(100%)'
        }}>

          {album.images && <img
            style={{
            width: '5rem',
            height: '5rem'
            }}
            src={album.images[0].url}
            alt={album.name}/>
          }

        <div style={{flexGrow: '1'}}>
          <PlayerProgress position={this.props.player.position} duration={this.props.player.duration}/>
            <ListItem
              primaryText={this.props.player.track.name}
              secondaryText={artists[0] ? artists[0].name : null}
              rightIcon={ this.props.player.status === 'PLAYING' ? <AvPause /> : <AvPlayArrow />}
            />

        </div>


        {this.props.player.track.preview_url && (
          <Sound
            url={this.props.player.track.preview_url}
            playStatus={this.props.player.status}
            onPlaying={this.handlePlaying.bind(this)}
          />
        )}

      </Paper>

    );
  }
};
