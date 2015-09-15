"use strict";
var React = require('react');
var Router = require('react-router');
var routes = require('./js/routes');
var RouterContainer = require('./js/utils/RouterContainer');

var router = Router.run(routes, (Handler, req)=>{
	var params = req.params;
	React.render(<Handler params={params} />, document.getElementById('app'));
})

router.transitionTo('/');
RouterContainer.set(router);