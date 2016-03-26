import React from 'react';
import { Component } from 'react';

export default class Panel extends Component {
  render() {
	  return (
			<div className="panel panel-warning">
			  <div className="panel-heading">
			  <span style={{fontWeight:'bold', fontSize:'14px', paddingRight:'5px'}}>
			  	{this.props.title}</span>
			  	(<a href={this.props.source} target="_blank">source</a>)
			  	<span className="pull-right">Features: {this.props.features}</span>
			  	</div>
			  <div className="panel-body">
			    {this.props.children}
			  </div>
			</div>
	  );
  }
}
