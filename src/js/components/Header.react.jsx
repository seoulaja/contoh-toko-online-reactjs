"use strict";
var React = require('react');
var {Component} = React;

class Header extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<header className="clearfix">
				<span>ReactJS Blueprint <span className="bp-icon bp-icon-about" data-content="The Blueprints are a collection of basic and minimal website concepts, components, plugins and layouts with minimal style for easy adaption and usage, or simply for inspiration."></span></span>
				<h1>View Mode Switch by Codrops</h1>
			</header>
		)
	}
}

module.exports = Header;