var React = require('react');
var ReactDOM = require('react-dom');

var bindEvent = function(){
	$("#regst").click(function(){
		alert("aa");
	});
};

var dataSource = [{
		title:"账号：",
		name: "username",
		type: "text"
	}, {
		title:"QQ：",
		name: "QQ",
		type: "text"
	}, {
		title:"密码：",
		name: "psd",
		type: "password"
	}, {
		title:"确认密码：",
		name: "psd2",
		type: "password"
	}, {
		title:"邮件：",
		name: "email",
		type: "text"
	}, {
		title:"电话：",
		name: "tel",
		type: "text"
	}];

var  UserInfo= React.createClass({    
    handleClick: function(event) {
    	alert("bb");
  	},
  	gobackClick:function(e){
		alert("gobackClick");
  	},
  	validVal:function(e){
  		var type = e.target.name;
  		if(type == "username"){

  		}else if(type == "qq"){

  		}else if(type == "psd"){

  		}else if(type == "psd2"){

  		}else if(type == "email"){

  		}else if(type == "tel"){

  		}
  		console.log(e.target.name)
  		console.log(e.target.value)
  	},
    render() {
    	var datalist = dataSource.map( function (data, i) {
	                  return <li key={i}>{data.title}<input type={data.type} name={data.name} /></li>;
	                })
        return (
            <div>
            	<ul>
	            	{datalist}
				 </ul> 
				 <button id="regst" onClick={this.handleClick}>注册</button>
				 <button id="goback" onClick={this.gobackClick}>返回</button>
            </div>
        );
    }
});

module.exports = UserInfo;

/*ReactDOM.render(
	<UserInfo itemDefaultMethod={bindEvent} />,
	document.getElementById("regInfo")
);
*/