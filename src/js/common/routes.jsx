var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var  NotFoundRoute = Router.NotFoundRoute,
  DefaultRoute = Router.DefaultRoute,
  RouteHandler = Router.RouteHandler;
 var index = require('./../index'),
  register = require('./../_component/register'),
  login = require('./../_component/login');

var Routes = (
	<Route name="index" handler={index}>
	    <Route name="register" handler={register}/>
	    <DefaultRoute handler={login}/>
	</Route>
);

module.exports = Routes;
