import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Examples from './pages/Examples';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Examples} />
  </Route>
);
