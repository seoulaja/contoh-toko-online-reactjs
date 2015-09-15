"use strict";
var React = require('react');
var {RouteHandler} = require('react-router');
var {Component} = React;
var Header = require('./components/Header.react');

class App extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="container">
				<Header />	
				<div className="main">
					<RouteHandler {...this.props} />
				</div>
			</div>
		)
	}
}

module.exports = App;