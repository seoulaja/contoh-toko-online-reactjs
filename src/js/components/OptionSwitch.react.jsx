"use strict";
var React = require('react/addons');
var {Component} = React;
var cx = React.addons.classSet;

class OptionSwitch extends Component {
	constructor(props){
		super(props);
	}
	onSwitchMode(mode, e){
		e.preventDefault();
		this.props.onSwitchMode(mode);
	}
	render(){
		var grid = cx({
			"cbp-vm-icon cbp-vm-grid": true,
			"cbp-vm-selected": this.props.mode == "grid"
		});
		var list = cx({
			"cbp-vm-icon cbp-vm-list": true,
			"cbp-vm-selected": this.props.mode == "list"

		});
		return (
			<div className="cbp-vm-options">
				<span className="total-cart">Total: ${this.props.total()}</span>
				<a className={grid} data-view="cbp-vm-view-grid" onClick={this.onSwitchMode.bind(this, "grid")}>Grid View</a>
				<a className={list} data-view="cbp-vm-view-list" onClick={this.onSwitchMode.bind(this, "list")}>List View</a>
			</div>
		)
	}
}

module.exports = OptionSwitch;