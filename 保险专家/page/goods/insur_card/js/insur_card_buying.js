mui.init();

mui.plusReady(function() {
	
	//修改地址按钮，跳转至地址管理界面
	var addressButton = document.getElementById("address");
	addressButton.addEventListener('tap',function(){
		mui.openWindow('address/insur_card_address.html','insur_card_address');
	});
	
	//noneDiv，跳转至地址管理界面
	var noneDiv = document.getElementById("noneDiv");
	noneDiv.addEventListener('tap',function(){
		mui.openWindow('address/insur_card_address.html','insur_card_address');
	});
	
	//收货地址div，跳转至地址管理界面
	var addressDiv = document.getElementById("addressDiv");
	addressDiv.addEventListener('tap',function(){
		mui.openWindow('address/insur_card_address.html','insur_card_address');
	});
	//提交订单
	var submitOrder = document.getElementById("submitOrder");
	submitOrder.addEventListener('tap',function(){
		var jsObj;
		var str;
		var data;
		var state = app.getState();
		var memberId = state.uid;
		
		var address = app.getAddress();
		var addressId = address.id;
		console.log("提交订单时 地址id为" + addressId);
		
		var customerId = 1;
		
		var jsonBussinessCommitList = [];
		//获取json 键值对数组 
		//格式
		//	{"productId":1, "customerId":1, "receiveAddrId":1},
		//  {"productId":1, "customerId":1, "receiveAddrId":1},
		//  {"productId":1, "customerId":1, "receiveAddrId":1}
		
		$(".nums-p").each(function(){
			var card_id = $(this).attr("data-id");
			var str = $(this).text();
			
			console.log("productId:" + card_id);
			
			str = str.replace(/[^0-9]*/g,"");
			num = parseInt(str);
			
			var numJson = {
				productId : card_id,
				num : num,
				customerId : customerId,
				receiveAddrId : addressId
			};
			
			jsonBussinessCommitList.push(numJson);
		});
		
		jsObj = {
            "memberId": memberId,
            "jsonBussinessCommitList": jsonBussinessCommitList
        	};
		str = JSON.stringify(jsObj);
        data = {"reqJsonStr":str};
		submitOrderFuc(data);
	});
	
	
	console.log("获取商品列表");
	//获取商品列表
	getCartList();
	
	console.log("获取联系人地址");
	//获取收件人地址
	getDefaultAddr();
});



//获取商品列表
function getCartList() {
	
	//获取用户 uid
	var ajaxUrl = '';
	var test = plus.storage.getItem('test');
	console.log(test);
	var state = app.getState();
	var uid = state.uid;
	//获取服务器地址和图片服务器地址
	var settings = app.getSettings();
	var webServiceUrl = settings.webServiceUrl;
	var imgUrl = settings.imgUrl;
	console.log("当前服务器地址为："+ webServiceUrl);
	
	///app/shoppingcart/list?id=memberID
	//url: "../../../json/goods/insur_card/card_cart.json"
	
	if(test){
		ajaxUrl = "../../../json/goods/insur_card/card_cart.json";
	}else{
		ajaxUrl = webServiceUrl + "app/shoppingcart/list?id=" + uid;
	}
	ajaxUrl = webServiceUrl + "app/shoppingcart/list?id=" + uid;
	
	//向服务器发送ajax请求获取   商品列表
	mui.ajax({
		url: ajaxUrl,
		type: "post",
		async: true,
		data: {},
		dataType: "json",
		timeout: 1000,
		success: function(data) {
			if(data.status == 1){
				console.log(data.message);
				var order_list = document.getElementById("order_list");
				console.log(imgUrl);
				
				var content = template("cartListTmpl", data);
				order_list.innerHTML = content;
				
				// 由于我们是异步执行，所以在html部分拼接完成之后，才能对其进行添加点击事件的操作；
				initFunc();
				
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
};


//获取收货地址
function getDefaultAddr(){
	app.getAddressList(function(data){
		if(data.status == 1){
			var addressArray = data.result;
			
			console.log(data.message);
			console.log(addressArray.length);
			
			if(addressArray.length == 0){
				$("#noneDiv").show();
				$("#addressDiv").hide();
			}
			
			//获取选择 地址 id
			var selectAddrId = plus.storage.getItem("selectAddrId");
			if(selectAddrId.trim() != ""){
				//处理返回来的json地址数据,将默认地址显示在页面中
				for(var i = 0; i< addressArray.length ; i++){
					//如果是 isdefault 将其存进本地
					if(addressArray[i].id == selectAddrId){
						console.log("当前选择的地址id是: "+ selectAddrId);
						addressArray[i].address = JSON.parse(data.result[i].address);
						console.log(addressArray[i].address.city);
						
						//将 ID 也一起保存进 本地
						addressArray[i].address.id = addressId;
						
						//保存本地
						app.setAddress(addressArray[i].address);
						
						setBuyingAddress();
					}
				}
			}else{
				//处理返回来的json地址数据,将默认地址显示在页面中
				for(var i = 0; i< addressArray.length ; i++){
					//如果是 isdefault 将其存进本地
					if(addressArray[i].isdefault == 1){
						var addressId = addressArray[i].id;
						console.log("当前默认地址id是: "+ addressId);
						addressArray[i].address = JSON.parse(data.result[i].address);
						console.log(addressArray[i].address.city);
						
						//将 ID 也一起保存进 本地
						addressArray[i].address.id = addressId;
						
						//保存本地
						app.setAddress(addressArray[i].address);
						
						setBuyingAddress();
					}
				}
			}
		}else{
			plus.nativeUI.toast(data.message);
		}
	});
}


function setBuyingAddress(){
	address = app.getAddress();
	$('#addressDiv').attr('data-id',address.id);
	$('#receiverSp').text(address.receiver);
	$('#provinceSp').text(address.province);
	$('#citySp').text(address.city);
	$('#areaSp').text(address.area);
	$('#streetSp').text(address.street);
	$('#addressSp').text(address.address);
	$('#phoneSp').text(address.phone);
	console.log("页面中地址id: "+$('#addressDiv').attr('data-id'));
}



//初始化点击事件和方法
function initFunc(){
	setTotalNumPrice();

	//计算总件数和总价，并进行设置
	function setTotalNumPrice(){
		var numArray = getPriceNumArray();
		var priceArray = getPricePriceArray();
		var totalNum = 0;
		var totalPrice = 0.00;
		for (i = 0; i < numArray.length; i++) {
			totalNum += numArray[i];
			totalPrice += numArray[i] * priceArray[i];
		}
		$("span#totalNum").text(totalNum);
		$("span#totalprice-p").text(totalPrice);
	}

	//获取价格单上的物品件数数组
	function getPriceNumArray(){
		var numArray = [];
		$('.nums').each(function(){
			var str = $(this).text();
			str = str.replace(/[^0-9]*/g,"");
			num = parseInt(str);
			numArray.push(num);
		});
	//			console.log(numArray);
		return numArray;
	}
	//获取价格单上的物品价格数组
	function getPricePriceArray(){
		var priceArray = [];
		$('.price').each(function(){
			var str = $(this).text();
			str = str.replace(/[^0-9.]*/g,"");
			price = parseFloat(str);
			priceArray.push(price);
		});
	//			console.log(priceArray);
		return priceArray;
	}
}



//提交订单
function submitOrderFuc(Alldata){
	strTest = JSON.stringify(Alldata);
	console.log(strTest);
	
	var test = plus.storage.getItem("test");
	
	console.log(plus.storage.getItem("test"));
	
	var settings = app.getSettings();
	var webServiceUrl = settings.webServiceUrl;
	
	test = false;
	
	if(test){
		mui.openWindow("../../myOrder/insur_card/insur_card_order.html","insur_card_order");
	}else{
		mui.ajax({
			url: webServiceUrl + "app/business/commit?id=" + uid,
			type: "post",
			async: true,
			data: Alldata,
			dataType: "json",
			timeout: 1000,
			success: function(data) {
				if(data.status == 1){
					console.log(data.message);
					mui.openWindow("../../myOrder/insur_card/insur_card_order.html","insur_card_order");
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
	
}
		