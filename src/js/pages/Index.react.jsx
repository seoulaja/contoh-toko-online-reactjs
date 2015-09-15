"use strict";
var React = require('react/addons');
var {Component} = React;
var OptionSwitch = require('../components/OptionSwitch.react');
var ProductList = require('../components/ProductList.react');
var cx = React.addons.classSet;

class Index extends Component {
	constructor(props){
		super(props);
		this.state = {
			mode: "list",
			products: [
				{
					image: "1.png",
					title: "Silver beet",
					in_cart: false,
					price: 19.90,
					details: "Silver beet shallot wakame tomatillo salsify mung bean beetroot groundnut.",
					_id: "1"
				},
				{
					image: "2.png",
					title: "Wattle seed",
					in_cart: false,
					price: 22.90,
					details: "Wattle seed bunya nuts spring onion okra garlic bitterleaf zucchini.",
					_id: "2"
				},
				{
					image: "3.png",
					title: "Kohlrabi bok",
					in_cart: false,
					price: 5.90,
					details: "Kohlrabi bok choy broccoli rabe welsh onion spring onion tatsoi ricebean kombu chard.",
					_id: "3"
				},
				{
					image: "4.png",
					title: "Melon sierra",
					in_cart: false,
					price: 12.90,
					details: "Melon sierra leone bologi carrot peanut salsify celery onion jícama summer purslane.",
					_id: "4"
				},
				{
					image: "5.png",
					title: "Celery carrot",
					in_cart: false,
					price: 15.00,
					details: "Celery carrot napa cabbage wakame zucchini celery chard beetroot jícama sierra leone.",
					_id: "5"
				},
				{
					image: "6.png",
					title: "Catsear",
					in_cart: false,
					price: 20.00,
					details: "Catsear cabbage tomato parsnip cucumber pea brussels sprout spring onion shallot swiss .",
					_id: "6"
				},
				{
					image: "7.png",
					title: "Mung bean",
					in_cart: false,
					price: 88.00,
					details: "Mung bean taro chicory spinach komatsuna fennel.",
					_id: "7"
				},
				{
					image: "8.png",
					title: "Epazote",
					in_cart: false,
					price: 34.90,
					details: "Epazote soko chickpea radicchio rutabaga desert raisin wattle seed coriander water.",
					_id: "8"
				},
				{
					image: "9.png",
					title: "Tatsoi caulie",
					in_cart: false,
					price: 21.50,
					details: "Tatsoi caulie broccoli rabe bush tomato fava bean beetroot epazote salad grape.",
					_id: "9"
				},
				{
					image: "10.png",
					title: "Endive okra",
					in_cart: false,
					price: 18.50,
					details: "Endive okra chard desert raisin prairie turnip cucumber maize avocado.",
					_id: "10"
				},
				{
					image: "1.png",
					title: "Bush tomato",
					in_cart: false,
					price: 9.00,
					details: "Bush tomato peanut shallot turnip prairie turnip gram desert raisin.",
					_id: "11"
				},
				{
					image: "2.png",
					title: "Yarrow leek",
					in_cart: false,
					price: 22.50,
					details: "Yarrow leek cabbage amaranth onion salsify caulie kale desert raisin prairie turnip garlic.",
					_id: "12"
				},
			]
		}
	}
	onSwitchMode(mode){
		this.state.mode = mode;
		this.setState(this.state);
	}
	_switchCart(_id){
		for (var i = this.state.products.length - 1; i >= 0; i--) {
			if(this.state.products[i]._id == _id){
				// reverse
				this.state.products[i].in_cart = !this.state.products[i].in_cart;
				break;
			}
		};
		this.setState(this.state);
	}
	_total(){
		var total = 0
		for (var i = this.state.products.length - 1; i >= 0; i--) {
			if(this.state.products[i].in_cart) total += this.state.products[i].price;
		};
		return total;
	}
	render(){
		var vm = cx({
			"cbp-vm-switcher": true,
			"cbp-vm-view-grid": this.state.mode == "grid",
			"cbp-vm-view-list": this.state.mode == "list"
		});
		return (
			<div id="cbp-vm" className={vm}>
				<OptionSwitch onSwitchMode={this.onSwitchMode.bind(this)} mode={this.state.mode} total={this._total.bind(this)} />
				<ProductList products={this.state.products} switchCart={this._switchCart.bind(this)} />
			</div>
		);
	}
}

module.exports = Index;