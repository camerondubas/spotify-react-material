import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistAlbums } from './artist.actions';
import { displayLoader, hideLoader } from '../loader/loader.actions';

import { Artist } from './Artist';

@connect(store => ({
  artistAlbums: store.artistAlbums
}))

export default class ArtistContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(displayLoader());
    this.props.dispatch(fetchArtistAlbums(this.props.params.artistId));
  }

  componentDidUpdate() {
    if (!this.props.artistAlbums.fetching) {
      this.props.dispatch(hideLoader())
    }
  }
  render() {
    return <Artist albums={this.props.artistAlbums.items}/>
  }
};


export { ArtistContainer };