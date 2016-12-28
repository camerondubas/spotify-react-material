import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { capitalizeFirstLetter, removeLastCharacter } from '../utils/strings';
import { Link } from 'react-router';

import { search } from './search.actions';
import { updateAppBar } from '../app/app.actions';

@connect(store => ({
  search: store.search,
  theme: store.app.theme
}))

export default class SearchResults extends React.Component {
  componentWillMount() {
    this.props.dispatch(updateAppBar({
      bgColor: this.props.theme.palette.canvasColor,
      textColor: this.props.theme.palette.textColor,
      title: 'Search Results'
    }));

    if (!this.props.fetched) {
      this.props.dispatch(search(this.props.params.searchQuery))
    }
  }

  componentWillUnmount() {
    this.props.dispatch(updateAppBar());
  }

  getAvatar(item) {
    let avatar = 'https://placehold.it/100x100';

    if (item.images && item.images[0] && item.images[0].url) {
      avatar = item.images[0].url
    } else if (item.album && item.album.images && item.album.images[0] && item.album.images[0].url) {
      avatar = item.album.images[0].url
    } else if (item.artist && item.artist.images && item.artist.images[0] && item.artist.images[0].url) {
      avatar = item.artist.images[0].url
    }

    return avatar;
  }

  getSecondaryText(item) {
    let secondaryText;
    if (item.artists && item.artists[0] && item.artists[0].name) {
      secondaryText = item.artists[0].name;
    }
    return secondaryText;
  }

  getLinkHref(key, item) {
    return [
      `/${removeLastCharacter(key)}`,
      key === 'playlists' ? `/${item.owner.id}` : null,
      `/${item.id}`
    ].join('');
  }

  render() {
    let render;
    if (!this.props.search.fetched) {
      render = <div></div>;
    } else {
      render = (
        <div>
          {Object.keys(this.props.search.results).map((key, idx) => (
            <div key={key}>
              <Subheader>{capitalizeFirstLetter(key)}</Subheader>
              <List>
                {this.props.search.results[key].items.map((item, idx) => (
                  <Link
                    to={this.getLinkHref(key, item)}
                    key={key + '-' + idx}
                  >

                    <ListItem
                      primaryText={item.name}
                      secondaryText={this.getSecondaryText(item)}
                      leftAvatar={<Avatar src={this.getAvatar(item)}/>}
                    />
                  </Link>
                ))}
              </List>
            </div>

          ))}
        </div>
      );
    }
    return render;
  }
}