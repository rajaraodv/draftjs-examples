import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Header extends Component {

	render() {
			return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">DRAFTJS EXAMPLES</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav  pull-right">
            <li><a href="https://facebook.github.io/draft-js/" target="_blank">DRAFT.JS</a></li>
            <li><a href="https://github.com/rajaraodv/draftjs-examples"  target="_blank">GITHUB</a></li>
          </ul>
        </div>
      </div>
    </nav>		
			);
	}
}

export default Header