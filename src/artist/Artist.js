import React from 'react';
import { connect } from 'react-redux';

import { fetchArtistAlbums } from './artist.actions';

@connect(store => ({
  artist: store.artist
}))
export default class Artist extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchArtistAlbums());
  }


  render() {
    return (
      <div>
      </div>
    );
  }
};