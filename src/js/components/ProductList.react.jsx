"use strict";
var React = require('react');
var {Component} = React;
var ProductItem = require('./ProductItem.react');

class ProductList extends Component {
	constructor(props){
		super(props);
	}
	render(){
		var productItems = this.props.products.map((product, i)=>
			<ProductItem {...product} switchCart={this.props.switchCart} key={i} />
		);
		return (
			<ul>
				{productItems}
			</ul>
		)
	}
}

module.exports = ProductList;