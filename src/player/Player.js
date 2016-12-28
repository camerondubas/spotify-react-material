import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import Paper from 'material-ui/Paper';
import {ListItem} from 'material-ui/List';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import PlayerProgress from './PlayerProgress';

import { fetchTrack } from '../track/track.actions';
import { playTrack, pauseTrack, updatePlayer, expandPlayer } from './player.actions';


// CONSTANTS
const TRANSITION_LENGTH = '1s';

@connect(store => ({
  player: store.player,
  theme: store.app.theme,
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

  expandPlayer() {
    this.props.dispatch(expandPlayer());
  }

  render() {
    let track = this.props.player.track || {};
    let album = track.album || {};
    let artists = track.artists;
    let expanded = this.props.player.expanded;
    let expanding = this.props.player.expanding;

    let width = this.refs.test ? this.refs.test.offsetWidth : null;

    return (
      <Paper
        zDepth={5}
        style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          height: expanded || expanding ? 'calc(100vh - 60px)' : '20vw',
          display: expanded ? 'block' : 'flex',
          transition: `all ${TRANSITION_LENGTH}`,
          transform: this.props.player.visible ? 'translateY(0)' : 'translateY(100%)',
          // backgroundColor: expanded || expanding ? this.props.theme.palette.primary2Color : this.props.theme.palette.canvasColor
        }}>

          {album.images && <img
            onClick={this.expandPlayer.bind(this)}
            style={{
              zIndex: 1,
              width: expanded || expanding ? '100vw' : '20vw',
              height: expanded || expanding ? '100vw' : '20vw',
              transition: `all ${TRANSITION_LENGTH}`
            }}
            src={album.images[0].url}
            alt={album.name}/>
          }

        <div ref='test' style={{
          backgroundColor: expanded || expanding ? this.props.theme.palette.primary2Color : this.props.theme.palette.canvasColor,
          width: expanding ? '100%' : width,
          flexGrow: '1',
          position: expanding && 'absolute',
          top: expanding ? '100vw' : '0',
          right: 0,
          transition: `all ${TRANSITION_LENGTH}`
          }}>
          <PlayerProgress position={this.props.player.position} duration={this.props.player.duration}/>

          {!expanded && <ListItem
              onClick={this.handleClick.bind(this)}
              primaryText={this.props.player.track.name}
              secondaryText={artists[0] ? artists[0].name : null}
              rightIcon={ this.props.player.status === 'PLAYING' ? <AvPause /> : <AvPlayArrow />}
              style={{
                transform: expanding ? 'translateY(100px)': 'translateY(0)',
                opacity: expanding ? 0 : 1,
                transition: `all ${TRANSITION_LENGTH}`
              }}
            />}

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
