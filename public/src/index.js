import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


ReactDOM.render(
    <Router history={browserHistory} routes={routes} />
  , document.getElementById('body'));
