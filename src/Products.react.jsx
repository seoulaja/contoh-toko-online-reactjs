"use strict";
var React = require('react');
var {Component} = React;

class Products extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="cbp-vm" className="cbp-vm-switcher cbp-vm-view-grid">
				<OptionSwitch />
				<ProductList />
			</div>
		)
	}
}

module.exports = Products;