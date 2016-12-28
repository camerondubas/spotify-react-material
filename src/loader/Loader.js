import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

@connect(store => ({
  loader: store.loader
}))
class Loader extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
};

export default Loader;

// <Paper
//   circle={true}
//   zDepth={2}
//   style={{
//           position: 'absolute',
//           top: 100,
//           left: '50%',
//           transform: `translateX(-50%) ${this.props.loader.visible ? 'scale(1)' : 'scale(0)'}`,
//           padding: 10
//         }}
// >
//   <CircularProgress size={30} />
// </Paper>