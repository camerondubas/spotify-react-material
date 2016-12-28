import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Link} from 'react-router';

const Artist = props => (
  <div>
    <GridList
      cols={2}>

      {props.albums.map(album => (
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
  </div>
);

export default Artist;
export { Artist };
