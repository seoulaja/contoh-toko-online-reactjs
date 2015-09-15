"use strict";
var React = require('react');
var {Component} = React;

class Product extends Component {
	constructor(props){
		super(props);
	} 
	render(){
		return (
			<div id="cbp-vm" className="cbp-vm-switcher cbp-vm-view-grid">
				Saya nggak tau data apa yang harus ditampilkan :( saya tidak ingin tahu semuanya, saya hanya ingin tahu detail dari produk dengan id: {this.props.params.product_id}
				<br />
				Saya ingin menampilkannya tapi data ini datang bukan dari parent saya, jadi saya nggak bisa minta detail data melalui props!
				<br />
				Saya butuh shared data, saya butuh global store !!!
			</div>
		);
	}
}

module.exports = Product;