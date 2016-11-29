import React from 'react';
import { connect } from 'react-redux';
import {authorizeUser} from './autorize.actions';
import CircularProgress from 'material-ui/CircularProgress';

@connect(store => ({
  authorize: store.authorize,
  history: store.history
}))
class Authorize extends React.Component {
  componentWillMount() {
    if (!this.props.authorize.authorized) {
      this.props.dispatch(authorizeUser());
    } else {
      this.props.router.push('/')
    }
  }

  componentWillUpdate() {
    if (!this.props.authorize.authorized) {
      this.props.dispatch(authorizeUser());
    } else {
      this.props.router.push('/')
    }
  }

  render() {
    return (
      <div>
        <h1>Authorizing...</h1>
        <CircularProgress />
      </div>
    )
  }
};

export default Authorize;