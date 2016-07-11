var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router'),
  Link  = Router.Link;
var $ = require('jquery');

var users = [{"name":"1234567","psd":"1234567"},{"name":"zhangsan","psd":"zhangsan"}];

var Login = React.createClass({
     getInitialState: function() {
      return {
        error: ""
      };
    },
	login: function(){
		var username = $(".username").val();
		var password = $(".password").val();

        var strRegex = /^[a-zA-z]\w{3,15}$/;
        var re = new RegExp(strRegex);
        if (re.test(username)){
            this.setState({
                error: ""
              });
            alert("账号："+username+"    密码："+password);
        }else{
            this.setState({
                error: "用户名以字母、数字、下划线组成，字母开头，4-16位。"
              });
            return;
        }

	},
    render() {
        return (
            <div className="div_login">
            	<div>账号：
                    <input className="username" type="text" />
                </div>
            	<div>密码：
                    <input className="password" type="password" maxLength="18" />
                </div>
                 <div className="error">{this.state.error}</div>
            	<div><button onClick={this.login}>登录</button></div>
            </div>
        );
    }
});

module.exports = Login;
