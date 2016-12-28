import React from 'react';
import { connect } from 'react-redux';
import {authorizeUser} from './autorize.actions';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

@connect(store => ({
  authorize: store.authorize,
  history: store.history
}))
class Authorize extends React.Component {
  componentWillMount() {
    this.auth();
  }

  componentWillUpdate() {
    this.auth();
  }

  auth() {
    let query =  this.getQueryString();
    if (this.props.authorize.authorized) {
      this.props.router.push('/')
    } else if (!this.props.authorize.authorized && query['access_token']) {
      this.props.dispatch(authorizeUser(query));
      
    }
  }

  getQueryString() {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((previous, pair) => {
      previous[pair.split('=')[0]] = pair.split('=')[1];
      return previous;
    }, {});
  }
  render() {
    return (
      <div>
        <RaisedButton
          href="https://accounts.spotify.com/authorize/?client_id=9c27ffa7b75a4886825fe6a92f9a405a&response_type=token&redirect_uri=http://localhost:8080/authorize"
          label="Connect To Spotify"
          secondary={true}
        />
      </div>
    )
  }
};

export default Authorize;