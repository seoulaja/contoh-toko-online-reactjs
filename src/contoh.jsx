"use strict";
var React = require('react');
var {Component} = React;
class Komponen extends Component {
	constructor(props){
		super(props);
		this.state = {
			internal: "Saya data Internal"
		}
	}
	_buttonClick(){
		console.log('Saya diklik');
	}
	render(){
		return (
			<div>
				<button onClick={this.props.external}>Button</button>
			</div>	
		);
	}
}
React.render(<Komponen external={()=>{console.log("Saya fungsi eksternal")}} />, document.body);