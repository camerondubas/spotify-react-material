import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {GridList, GridTile} from 'material-ui/GridList';

import {fetchFeaturedPlaylists} from './browse.actions';

@connect(store => ({
  authorize: store.authorize,
  browse: store.browse
}))
export default class Browse extends React.Component {
  componentWillMount() {
    if (this.props.authorize.authorized) {
      this.props.dispatch(fetchFeaturedPlaylists())
    }
  }

  render() {
    let render;
    if (this.props.authorize.authorized) {
      render = (
        <div>
          <GridList
            cellHeight={180}
          >
            <Subheader>{this.props.browse.featuredPlaylists.message} - Featured Playlists</Subheader>

            {this.props.browse.featuredPlaylists.playlists.items.map((item, idx) => (
              <GridTile
                key={item.id || idx}
                cols={idx % 5 === 0 ? 2 : 1}
                rows={idx % 5 === 0 ? 2 : 1}
              >
                <img src={item.images[0].url} />
              </GridTile>
            ))}
          </GridList>
          <h1>Browse</h1>
          <Link to="/artist/5K4W6rqBFWDnAN6FQUkS6x">Test</Link>
        </div>
      )
    } else {
      render = (
        <RaisedButton
          href="https://accounts.spotify.com/authorize/?client_id=9c27ffa7b75a4886825fe6a92f9a405a&response_type=token&redirect_uri=http://localhost:8080/authorize"
          label="Connect To Spotify"
          secondary={true}
        />
      )
    }
    return render;
  }
};