var React = require('react/addons');
var {Component} = React;
var {Link} = require('react-router');
var cx = React.addons.classSet;

class ProductItem extends Component {
	constructor(props){
		super(props);
	} 
	_switchCart(e){
		e.preventDefault();
		this.props.switchCart(this.props._id);
	}
	render(){
		var cartButtonClass = cx({
			"cbp-vm-icon cbp-vm-add": true,
			"add": !this.props.in_cart, 
			"remove": this.props.in_cart, 
		});
		var cartButtonText = cx({
			"Add to cart": !this.props.in_cart, 
			"Remove from cart": this.props.in_cart, 
		});
		var status = cx({
			"booked": this.props.in_cart 
		});
		return (
			<li className={status}>
				<Link className="cbp-vm-image" to={`/product/${this.props._id}`}><img src={"/stylesheets/images/"+ this.props.image} /></Link>
				<h3 className="cbp-vm-title">{this.props.title}</h3>
				<div className="cbp-vm-price">${this.props.price}</div>
				<div className="cbp-vm-details">
					{this.props.details}
				</div>
				<a className={cartButtonClass} href="#" onClick={this._switchCart.bind(this)}>{cartButtonText}</a>
			</li>
		);
	}
}

module.exports = ProductItem;