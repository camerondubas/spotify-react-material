import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import ActionRestore from 'material-ui/svg-icons/action/restore';
import RaisedButton from 'material-ui/RaisedButton';

const SearchOverlay = props => (
  // TODO: animate this in/out properly
  <div
    className="SearchOverlay"
    style={{
      backgroundColor: props.visible ? props.muiTheme.palette.canvasColor : 'transparent',
      display: props.visible ? 'block' : 'none',
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: '0',
      zIndex: '100',
      transition: 'all .3s'
    }}
  >
    <List style={{
      marginTop: 60
    }}>
      {props.recentSearches.map((search, idx) =>
        <ListItem
          key={idx}
          primaryText={search}
          leftIcon={<ActionRestore />}
          onClick={props.handleClick.bind(this, search)}
        />)
      }

      {props.recentSearches.length > 0 && <ListItem disableTouchRipple={true} onClick={props.handleDeleteHistory.bind(this)}>
        <RaisedButton
          label="Clear Search History"
          fullWidth={true}
        />
      </ListItem>}

    </List>
  </div>
);

export default muiThemeable()(SearchOverlay);