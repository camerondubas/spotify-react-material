import React from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import { fetchArtistAlbums } from './artist.actions';
import {Link} from 'react-router';

@connect(store => ({
  artist: store.artist
}))
export default class Artist extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchArtistAlbums(this.props.params.artistId));
  }


  render() {
    let albums = this.props.artist.albums;
    
    return (
      <GridList
        cols={2}>

        {albums.map(album => (
          <Link
            to={ '/album/' + album.id }
            key={album.id}>

            <GridTile
              cols={1}
              title={album.name}>

              <img src={album.images[0].url} />
            </GridTile>
          </Link>
        ))}
      </GridList>
    );
  }
};

