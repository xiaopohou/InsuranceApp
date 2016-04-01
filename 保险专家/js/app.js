(function($, owner) {
	//服务器地址初始化
	owner.serverUrlInit = function(){
		var settings = owner.getSettings();
		
//		var webServiceUrl = "http://115.28.72.167/";
//		var imgUrl = "http://www.annpeter.cn:8080/";
		
		var webServiceUrl = "http://192.168.1.247:8080/";
		var imgUrl = "http://192.168.1.247:8080/";

		//定义 urlInfo数组存放 url信息
		var urlInfoArray = [];
		
		//object  url键值对
		var urlInfoObj = {
			webServiceUrl : webServiceUrl
		}
//		console.log(urlInfoObj.webServiceUrl);
		
		//将urlObj Push 到数组中
		urlInfoArray.push(urlInfoObj);
//		console.log(urlInfoArray[0].webServiceUrl);
		
		//保存到本地设置中
		settings.webServiceUrl = webServiceUrl;
		settings.imgUrl = imgUrl;
		settings.urlInfoArray = urlInfoArray;
//		console.log(settings.urlInfoArray[0].webServiceUrl);
		owner.setSettings(settings);
		console.log("服务器初始化成功");
	}
	
	//动态更改服务器地址
	owner.setServerUrl = function(info){
		//获取当前设置
		var settings = owner.getSettings();
		
		//保存到本地设置中
		settings.webServiceUrl = info.webServiceUrl;
		owner.setSettings(settings);
	}
	
////服务器地址
//	webServiceUrl="http://115.28.72.167/";
//	ptServerUrl = "http://www.annpeter.cn:8080";
	
//	console.log("app.js");
//---------------------------------------------------------新用户注册-----------------------------------------------------
//---------------------------------------------------------       -----------------------------------------------------

// 发送的json格式
//{
//  "realname": "test1",
//	"userpwd": "test1",
//	"mobile": "100",
//	"city": "无锡",
//	"code": "2121"
//}
//{"reqJsonStr":str}
//
//  返回json格式
//	{
//	  "result": [
//	    {
//	      "uid": "5",
//	      "city": "无锡",
//	      "mobile": "500",
//	      "username": "test1",
//	      "realname": "test1"
//	    }
//	  ],
//	  "message": "注册成功",
//	  "status": 1
//	}

	owner.reg = function(regInfo, callback)
	{
		//$.noop为一个空函数，就是什么都不做
		callback = callback || $.noop;
		regInfo = regInfo || {};
		
		regInfo.realname   = regInfo.realname || '';
		regInfo.mobile     = regInfo.mobile || '';
		regInfo.city       = regInfo.city || '';
		regInfo.code       = regInfo.code || '';
		regInfo.password   = regInfo.password || '';
		regInfo.repassword = regInfo.repassword || '';

		
		//正则表达式   \s空格 +一个或多个 /g全局    这里就是将空格去掉，空格去掉为空说明信息无效
		if (regInfo.mobile.replace(/\s+/g, '') == '' || regInfo.realname.replace(/\s+/g, '') == '')
		{
			return callback('某些重要注册信息未保存，请重新注册');	
		}
		else if (regInfo.code.replace(/\s+/g, '') == '')
		{
			return callback('请输入短信验证码');	
		}
		else if (regInfo.password.replace(/\s+/g, '') == '')
		{
			return callback('请设置登录密码');
		}
		else if (regInfo.password.length<6)
		{
			return callback('登录密码不可少于6个字符');
		}
		else if (regInfo.password.length > 20)
		{
			return callback('登录密码不可大于20个字符');
		}
		else if (regInfo.repassword.replace(/\s+/g, '') == '')
		{
			return callback('请再次确认登录密码');
		}
		else if (regInfo.repassword != regInfo.password)
		{
			return callback('两次输入密码不一致');
		}
		else
		{
			var settings = owner.getSettings();
			webServiceUrl = settings.webServiceUrl;
			console.log(webServiceUrl);
//			return owner.createState("11",callback);

			//加密密码
			regInfo.password = hex_md5(regInfo.password);
			console.log(regInfo.password);

			var reqJsonStr = {
				"realname" : regInfo.realname,
				"userpwd"  : regInfo.password,
				"mobile"   : regInfo.mobile,
				"city"     : regInfo.city,
				"code"     : regInfo.code
			}
			
			reqJsonStr = JSON.stringify(reqJsonStr);
			mui.ajax(webServiceUrl+'app/member/register',
			{				
				data:{
					"reqJsonStr" : reqJsonStr
				},
				dataType:'json',
				type:'post',
				timeout:8000,
				beforeSend: function() {
					plus.nativeUI.showWaiting('');
				},
				complete: function() {
					plus.nativeUI.closeWaiting();
				},
				success: function(data) 
				{
					if(data.status == 1)
					{
						owner.createState(data.result[0]);
						var state = owner.getState();
						return callback();
					}
					else
					{
						return callback(data.message);
					}
				},
				error: function(xhr, type, errorThrown)
				{
					return callback('当前网络较忙，请稍后重试');	
				}
			});	
		}
	};
	
//---------------------------------------------------------用户登录-----------------------------------------------------
//---------------------------------------------------------       -----------------------------------------------------

// 发送的json格式
//{
//  "mobile": "1571776629",
//  "password": "123456",
//}
//  返回json格式
//{
//  "status": "1",
//  "message": "回馈信息",
//  "info": 
//	    {
//	        "username": "Jepson",
//	        "realname": "Jepson",
//	        "mobile": "1571776629",
//	        "city": "镇江",
//	        "id": "id"
//	    }
//  
//}
	owner.login = function(loginInfo, callback)
	{
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		
		if (loginInfo.account.replace(/\s+/g, '') == '')
		{
			return callback('请输入手机号码');
		}
		else if (!/^((13[0-9]{9})|(14[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9}))$/.test(loginInfo.account))
		{
			return callback('请输入有效的手机号码');
		}
		else if (loginInfo.password.replace(/\s+/g, '') == '')
		{
			return callback('请输入登录密码');
		}
		else
		{
//			http://115.28.72.167/jt/index.php/User/register
//			return owner.createState(loginInfo.account,callback);
			var settings = owner.getSettings();
			webServiceUrl = settings.webServiceUrl;
			console.log(webServiceUrl);
//jt/index.php/User/mobileLogin
///app/member/login


			//加密密码
			loginInfo.password = hex_md5(loginInfo.password);
			console.log(loginInfo.password);


			var jsObj={
			  "mobile": loginInfo.account,
			  "userpwd": loginInfo.password
			}
			
			var str=JSON.stringify(jsObj);

			mui.ajax(webServiceUrl+'app/member/login',{
				data:{
					"reqJsonStr": str,
				},
				dataType:'json',
				type:'post',
				timeout:8000,
				beforeSend: function() {
					plus.nativeUI.showWaiting('');
				},
				complete: function() {
					plus.nativeUI.closeWaiting();
				},
				success: function(data) 
				{
					if(data.status == 1)
					{
						owner.createState(data.result[0]);
						console.log(data.result[0].id);
						var state = owner.getState();
						return callback();
					}
					else
					{
						return callback(data.message);	
//						return owner.createState(data.info,callback);
//						return callback(data.message);
					}
				},
				error: function(xhr, type, errorThrown)
				{
					return callback('当前网络较忙，请稍后重试');	
				}
			});	
		}
	};
	
//--------------------------------------------------发送验证码-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------

// 发送的json格式
//{
//	"reqJsonStr":{
//		"mobile": "1571776629"
//	}
//}
//  返回json格式

//{"result":[],"message":"发送成功","status":1}
	owner.sendMsg = function(mobile, callback)
	{
		callback = callback || $.noop;
		mobile = mobile || '';
		
		if (mobile.replace(/\s+/g, '') == '')
		{
			return callback('请输入手机号码');
		}
		else if (!/^((13[0-9]{9})|(14[0-9]{9})|(15[0-9]{9})|(17[0-9]{9})|(18[0-9]{9}))$/.test(mobile))
		{
			return callback('请输入有效的手机号码');
		}
		else
		{
//			return callback();
			var settings = owner.getSettings();
			webServiceUrl = settings.webServiceUrl;
			console.log(webServiceUrl);
			
			var reqJsonStr = {
				"mobile" : mobile
			};
			reqJsonStr = JSON.stringify(reqJsonStr);
			
			//php服务器端  jt/index.php/User/mobileVsms
			//java 服务器端 /app/member/identifyphone
			mui.ajax(webServiceUrl+'/app/member/identifyphone',
			{
	
				data:{
					"reqJsonStr" : reqJsonStr
				},
				dataType:'json',
				type:'post',
				timeout:8000,
				beforeSend: function() {
					plus.nativeUI.showWaiting('');
				},
				complete: function() {
					plus.nativeUI.closeWaiting();
				},
				success: function(data) 
				{					
					if(data.status == "1")
					{
						return callback();	
					}
					else
					{
						return callback(data.message);	
					}
				},
				error: function(xhr, type, errorThrown)
				{
					return callback('当前注册验证网络较忙，请稍后重试');
				}
			});
		}
	};
		
//--------------------------------------------------找回密码-----------------------------------------------------
//--------------------------------------------------       ----------------------------------------------------
//var subInfo = {
//	mobile: state.forgetMobile,
//	code: codeBox.value,
//	password: passwordBox.value,
//	repassword: repasswordBox.value
//};
	owner.forget = function(subInfo, callback) {
		callback = callback || $.noop;
		subInfo = subInfo || {};
		
		subInfo.mobile     = subInfo.mobile || '';
		subInfo.code       = subInfo.code || '';
		subInfo.password   = subInfo.password || '';
		subInfo.repassword = subInfo.repassword || '';
		
		//正则表达式   \s空格 +一个或多个 /g全局    这里就是将空格去掉，空格去掉为空说明信息无效
		if (subInfo.mobile.replace(/\s+/g, '') == '')
		{
			return callback('手机号由于网络原因,系统未检测到，请重新注册');	
		}
		else if (subInfo.code.replace(/\s+/g, '') == '')
		{
			return callback('请输入短信验证码');	
		}
		else if (subInfo.password.replace(/\s+/g, '') == '')
		{
			return callback('请设置登录密码');
		}
		else if (subInfo.password.length<6)
		{
			return callback('登录密码不可少于6个字符');
		}
		else if (subInfo.password.length > 20)
		{
			return callback('登录密码不可大于20个字符');
		}
		else if (subInfo.repassword.replace(/\s+/g, '') == '')
		{
			return callback('请再次确认登录密码');
		}
		else if (subInfo.repassword != subInfo.password)
		{
			return callback('两次输入密码不一致');
		}
		else
		{
			var settings = owner.getSettings();
			webServiceUrl = settings.webServiceUrl;
			console.log(webServiceUrl);
			
//			return owner.createState("11",callback);
///app/member/retrieve
//jt/index.php/User/mobileForgetPass

		    //加密密码
			subInfo.password = hex_md5(subInfo.password);
			console.log(subInfo.password);


			var jsObj={
				"userpwd": subInfo.password,
				"code": subInfo.code,
				"mobile": subInfo.mobile
			}
			
			str = JSON.stringify(jsObj);

			mui.ajax(webServiceUrl+'app/member/retrieve',
			{				
				data:{
					"reqJsonStr" : str
				},
				dataType:'json',
				type:'post',
				timeout:8000,
				beforeSend: function() {
					plus.nativeUI.showWaiting('');
				},
				complete: function() {
					plus.nativeUI.closeWaiting();
				},
				success: function(data) 
				{
					if(data.status)
					{
						return callback();
						
					}
					else
					{
//						owner.createState(data.info);
//						var state = owner.getState();
						return callback(data.message);
					}
				},
				error: function(xhr, type, errorThrown)
				{
					return callback('当前网络较忙，请稍后重试');	
				}
			});	
		}
//		return callback(null, '新的随机密码已经发送到您的手机，请查收。');
	};


//--------------------------------------------------判断登录状态-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------
	owner.has_login = function(callback) {
		var settings  = owner.getSettings();
		var state     = owner.getState();

//&& state.token
		if (state.timestamp && state.uid  && settings.autoLogin)
		{
			var myDate    = new Date();
			var timestamp = myDate.getTime();
			
			if (timestamp < state.timestamp)
			{
				if (settings.gestures)
				{
					return callback('unlock');
				}
				else
				{
					return callback();
				}
			}
			else
			{
				return callback();
//				var settings = owner.getSettings();
//				webServiceUrl = settings.webServiceUrl;
//				console.log(webServiceUrl);
				
//				mui.ajax(webServiceUrl+'simple/token_login',
//				{
//					data:{
//						uid: state.uid,
//						token: state.token
//					},
//					dataType:'json',
//					type:'post',
//					timeout:8000,
//					beforeSend: function() {
//						plus.nativeUI.showWaiting('');
//					},
//					complete: function() {
//						plus.nativeUI.closeWaiting();
//					},
//					success: function(data) 
//					{					
//						if(data.isError)
//						{
//							return callback(data.message);
//						}
//						else
//						{
//							return owner.createState(data.info,callback);
//						}
//					},
//					error: function(xhr, type, errorThrown)
//					{
//						return callback('当前网络较忙，请稍后重试');
//					}
//				});		
			}
		}
		else
		{
			return callback('登录超时');
		}
	};
	

	
//--------------------------------------------------设置登录信息-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------
	owner.createState = function(info) {
		var state     = owner.getState();
		var myDate    = new Date();
		var timestamp = myDate.getTime();
	
		state.uid       = info.id;
		state.username  = info.username;
		state.realname  = info.realname;
		state.city      = info.city;
		state.mobile    = info.mobile;
//		state.head_ico  = info.head_ico;
//		state.token     = info.token;
		state.timestamp = timestamp + 86400000;
//		plus.storage.setItem("userInfo", str);	
		//设置当前状态
		owner.setState(state);
	};
	
	
	
//--------------------------------------------------设置登录信息-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------
	owner.setState = function(state) {
		state = state || {};
		plus.storage.setItem('$state', JSON.stringify(state));
	};
	
	
//--------------------------------------------------获取当前状态-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------
	owner.getState = function() {
		var stateText = plus.storage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};


//--------------------------------------------------应用本地设置-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	};

//--------------------------------------------------设置应用本地配置-----------------------------------------------------
//--------------------------------------------------       -----------------------------------------------------

	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	};
		
}(mui, window.app = {}));