"use strict";
var React = require('react');
var Router = require('react-router'); 
var {Link, Route, RouteHandler, DefaultRoute} = Router;

// pages
var App = require('./App.react');
var Index = require('./pages/Index.react');
var Product = require('./pages/Product.react');

// routes

var routes = (
	<Route handler={App}>
		<Route name="index" path="/" handler={Index} />
		<Route name="product" path="/product/:product_id" handler={Product} />
	</Route>
	);
module.exports = routes;