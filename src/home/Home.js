import React from 'react';
import {Link} from 'react-router';

let Home = () => (
  <div>
    <h1>HOME!</h1>
    <Link to="/artist/1">Test</Link>
  </div>
);

export default Home;