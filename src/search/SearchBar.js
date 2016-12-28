import React from 'react';
import { connect } from 'react-redux';

import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import SearchOverlay from './SearchOverlay';

import muiThemeable from 'material-ui/styles/muiThemeable';


import {displaySearch, hideSearch, search, deleteHistory} from './search.actions';
import {updateAppBar, historyBack} from '../app/app.actions';
import {contractPlayer} from '../player/player.actions';

@connect(store => ({
  search: store.search,
  app: store.app,
  routing: store.routing,
  player: store.player
}))

class AppNavBar extends React.Component {
  componentDidUpdate() {
    this.refs.searchBar && this.refs.searchBar.focus();
  }

  openSearch() {
    this.props.dispatch(updateAppBar({
      bgColor: this.props.muiTheme.palette.canvasColor,
      textColor: this.props.muiTheme.palette.textColor
    }));
    this.props.dispatch(displaySearch());
  }

  goBack() {
    this.props.dispatch(historyBack(this.props.routing.locationBeforeTransitions.pathname));
  }

  hideSearch() {
    this.props.dispatch(hideSearch());
  }

  deleteHistory() {
    this.props.dispatch(deleteHistory());
  }

  contractPlayer() {
    this.props.dispatch(contractPlayer());
  }

  search(query) {
    let searchQuery  = query || this.refs.searchBar.input.value;
    if (searchQuery) {
      this.props.dispatch(search(searchQuery))
    } else {
      // TODO Handle Error
      console.log('cannot be empty');
    }
  }

  handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.search();
    }
  }

  handleClick() {
    this.search();
  }

  render() {
    let title = this.props.app.title;
    let leftElementFn = this.goBack.bind(this);
    let rightElementFn = this.openSearch.bind(this);
      if (this.props.search.active) {
        title = (
          <TextField
            hintText="Search"
            style={{
              fontSize: 24
            }}
            underlineShow={false}
            ref="searchBar"
            onKeyPress={this.handleKeyPress.bind(this)}
          />
        );
        leftElementFn = this.hideSearch.bind(this);
        rightElementFn = this.handleClick.bind(this);
      } else if (this.props.player.expanded) {
        leftElementFn = this.contractPlayer.bind(this);
      }
    
    return (
      <div className="AppBar--wrapper">
        <AppBar
          title={title}
          titleStyle={{
              display: 'flex',
              alignItems: 'center',
              color: this.props.app.textColor
            }}
          style={{
              position:'fixed',
              backgroundColor: this.props.app.bgColor
            }}
          iconElementLeft={<IconButton onClick={leftElementFn} ><NavigationArrowBack color={this.props.app.textColor} /></IconButton>}
          iconElementRight={<IconButton onClick={rightElementFn} ><ActionSearch color={this.props.app.textColor} /></IconButton>}
        />
        <SearchOverlay
          visible={this.props.search.active}
          handleClick={this.search.bind(this)}
          recentSearches={this.props.search.recentSearches}
          handleDeleteHistory={this.deleteHistory.bind(this)}
        />
      </div>
    );

  }
}


export default muiThemeable()(AppNavBar);