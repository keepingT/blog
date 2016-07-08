var React = require('react'),
	ReactDOM = require('react-dom'),
	Router = require('react-router');
var	login = require('./_component/login'),
	Routes = require('./common/routes');
	require('!style!css!less!./../css/main.less');
	// require('./../css/index.css');

ReactDOM.render(
	React.createElement(login,null),
	document.getElementById("container")
);

/*Router.run(Routes, Router.HistoryLocation,  function (Handler) {
	console.log(1111,Handler)
  React.render(React.createElement(Handler,null), document.getElementById("container"));
});*/