mui.init();

document.getElementById("address_add").addEventListener('tap',function(){
	mui.openWindow('insur_card_address_add.html','insur_card_address_add');
});

document.getElementById("setDefault").addEventListener('tap',function(){
	mui.openWindow('insur_card_address_modify.html','insur_card_address_modify');
});


mui.plusReady(function(){
	getAddressList();
});


//获取收货地址列表
function getAddressList() {
	app.getAddressList(function(data){
		if(data.status == 1){
			console.log(data.message);
			var addressList = document.getElementById("addressList");
			
			//处理返回来的json地址数据
			for(var i = 0; i< data.result.length ; i++){
				data.result[i].address = JSON.parse(data.result[i].address);
			}
			
//			console.log(data.result[0].receiveAddr);
			
			var content = template("addressListTmpl", data);
			addressList.innerHTML = content;
			
			// 由于我们是异步执行，所以在html部分拼接完成之后，才能对其进行添加点击事件的操作；
			initFunc(data);
		}else{
			plus.nativeUI.toast(data.message);
		}
	});
};

function initFunc(data){
	//给默认地址添加文字   (默认地址) 
	setDefault(data);
	
	var active="address-active";
	var flag;
	
	//给所有地址添加监听事件  
	mui(".mui-content").on('tap','.order-address',function(){
		var attr=this.classList;
		if(!attr.contains(active)){
			changeDef();
			attr.add(active);
			flag=this;
		}
		var id = this.getAttribute("addressId");
		console.log("选择的地址id为：" + id);
		
		var isdefault = this.getAttribute("isdefault");
		console.log("是否为默认地址：" + isdefault);
		
		var state = app.getState();
		var member_id = state.uid;
		console.log("当前用户id为：" + member_id);
		
		showActionSheet(id,member_id,isdefault);
	});
	
	
	function showActionSheet(id,member_id,isdefault){
		plus.nativeUI.actionSheet({
						cancel: "取消",
						buttons: [{
							title: "设为当前收货地址"
						}, {
							title: "设为默认收货地址"
						},{
							title: "删除该地址"
						}]
					},function(event) {
						/*
						 * 根据文档所讲，取消键为0
						 * 其它键的所引致从1开始计算
						 */
						if (event.index == 1) {
							plus.storage.setItem("selectAddrId",id);
							//跳转到结算付款页面
							toCardBuying();
							
						} else if (event.index == 2) {
							//设为默认地址
							setDefaultAddr(id,member_id,isdefault);
							
						}else if(event.index == 3){
							//进行删除操作
							deleteAddr(id,member_id,isdefault,function(err){
								plus.nativeUI.toast(err);
								location.reload();
							});
						}
					});
	};
	
	function getAddrData(id,member_id,isdefault){
		var listDiv = 	$(".listDiv[addressId=" + id + "]").text().trim();
		var receiver = 	$("[name=receiver][addressId=" + id + "]").text().trim();
		var phone = 	$("[name=phone][addressId=" + id + "]").text().trim();
		var province= 	$("[name=province][addressId=" + id + "]").text().trim();
		var city=		$("[name=city][addressId=" + id + "]").text().trim();
		var area= 		$("[name=area][addressId=" + id + "]").text().trim();
		var street= 	$("[name=street][addressId=" + id + "]").text().trim();
		var address= 	$("[name=address][addressId=" + id + "]").text().trim();
		
		var allarea =  province + city + area;
		console.log(allarea);
		
		var addresslist = {
			"province" : province,
			"city"     : city,
			"area"	   : area,
			"allarea"  : allarea,
			"street"   : street,
			"address"  : address,
			"receiver" : receiver,
			"phone"    : phone
		};
		
		addresslist = JSON.stringify(addresslist);
		
		var uid		 	= member_id;
		var addressID 	= id;
		
	    var jsObj = {
            "isdefault": "1",
            "id": addressID,
            "member_id": uid,
            "address": addresslist,
            "contactor": receiver,
            "tel": phone
    	};
		return jsObj;    	
	}
	
	
	
	function setDefaultAddr(id,member_id,isdefault){
		console.log(id);
		//从页面中提取数据，并封装成 obj 对象
		var addressData = getAddrData(id,member_id,isdefault);
		
		var str = JSON.stringify(addressData);
        console.log(str);
		data = {"reqJsonStr":str};
		
		var settings = app.getSettings();
		var webServiceUrl = settings.webServiceUrl;
		var ajaxUrl = webServiceUrl + "app/receaddr/profile";
    	
    	mui.ajax({
			url: ajaxUrl,
			type: "post",
			async: true,
			data: data,
			dataType: "json",
			timeout: 1000,
			success: function(data) {
				if(data.status == 1){
					console.log(data.message);
					plus.nativeUI.toast(data.message);
					mui.openWindow('insur_card_address.html',"insur_card_address");
					
					//保存地址后关闭此页面
					setTimeout(function(){
						plus.webview.close("insur_card_address_modify_2","none");
					},500);
					
					console.log("跳转到新页面");
				}else{
					plus.nativeUI.toast(data.message);
				}
			},
			error:function(xhr,type,errorThrown){
				//异常处理
				plus.nativeUI.toast("网络好像暂时不通畅哦，请重新加载页面");
				console.log(type);
			}
		});
	}
 	
	
	function deleteAddr(id,member_id,isdefault,callback){
		var settings = app.getSettings();
		var webServiceUrl = settings.webServiceUrl;
		var ajaxUrl = webServiceUrl + "app/receaddr/delete?id=" + id;
		
		console.log("当前进行删除收货地址操作，地址是" + ajaxUrl);
		
	    var jsObj =  {
            "id" : id,
            "member_id": member_id,
            "isdefault": isdefault,
        };
        
        var str = JSON.stringify(jsObj);
        // 封装成json字符串提交到后台
//      var data = {"reqJsonStr":str};
		
		data = {};
        
		mui.ajax(ajaxUrl,{
			data : data,
			dataType : 'json',
			type : 'post',
			timeout : 8000,
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
	};
	
	
	
	function toCardBuying(){
		mui.openWindow('insur_card_buying.html','insur_card_buying');
		var parentview = plus.webview.currentWebview().opener();
		parentview.reload(true);
		plus.webview.currentWebview().close();
	}
	
	function changeDef(){
		var addre=document.getElementsByClassName("order-address");
		for(var i=0;i<addre.length;i++){
			var cls=addre[i].classList;
			if(cls.contains(active))
				cls.remove(active);
		}
	}
	
	//设置默认地址样式
	function setDefault(data){
//		console.log(data.result[0].jsonShoppingCarts[0].isdefault);
		var cartArray = data.result;
		for (var i = 0; i < cartArray.length ; i++) {
			console.log("收货地址 id:" + cartArray[i].id 
					+" , isdefault:" + cartArray[i].isdefault);
			if(cartArray[i].isdefault == 1){
				
				console.log(cartArray[i].id);
				
				//获取 默认div 对象
//				console.log($('.listDiv[addressId=' +cartArray[i].id + ']').html()) ;

				var listDiv = $('.listDiv[addressId=' +cartArray[i].id + ']');
				var defaultSpan = $('span[addressId=' +cartArray[i].id + '][name=default]');
//				console.log(defaultSpan.html());
				
				defaultSpan.text("(默认地址)");
				
				//给 默认 div 对象添加背景样式
//				console.log(listDiv.html());
				listDiv.addClass("address-active");
				
				
				
//				defaultDiv.addClass("order-address");
			}
		}
	}
	
}