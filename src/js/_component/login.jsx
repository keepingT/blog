var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router'),
  Link  = Router.Link;
var $ = require('jquery');


var users = [{"name":"1234567","psd":"1234567"},{"name":"zhangsan","psd":"zhangsan"}];

var Login = React.createClass({
	login: function(){
		var username = $(".username").val();
		var password = $(".password").val();
		alert("账号："+username+"    密码："+password);

	},
    render() {
        return (
            <div className="div_login">
            	<div>账号：<input className="username" type="text"/></div>
            	<div>密码：<input className="password" type="password"/></div>
            	<div><button onClick={this.login}>登录</button></div>
            </div>
        );
    }
});

module.exports = Login;
