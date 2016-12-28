import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
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

  componentWillUpdate() {
    if (this.props.browse.error) {
      this.props.router.push('/authorize');
    }
  }

  // TODO: MOVE UNAUTHED to it's own view.
  // USE browse.error for detection

  render() {
    return (  <div>
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
              <Link  to={ '/playlist/' + item.owner.id + '/' + item.id }>
                <img src={item.images[0].url} style={{width: '100%'}}/>
              </Link>

            </GridTile>
          ))}
        </GridList>
        <h1>Browse</h1>
        <Link to="/artist/5K4W6rqBFWDnAN6FQUkS6x">Test</Link>
      </div>
    )
  }
};