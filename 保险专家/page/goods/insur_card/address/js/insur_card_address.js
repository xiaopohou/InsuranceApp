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
	mui(".mui-content").on('tap','.order-address',function(){
		var attr=this.classList;
		if(!attr.contains(active)){
			changeDef();
			attr.add(active);
			flag=this;
		}
		var id = this.getAttribute("addressId");
		console.log(id);
		
		mui.openWindow('insur_card_buying.html','insur_card_buying');
		
		var parentview = plus.webview.currentWebview().opener();
		parentview.reload(true);
		plus.webview.currentWebview().close();
	});
	
	function changeDef(){
		var addre=document.getElementsByClassName("order-address");
		for(var i=0;i<addre.length;i++){
			var cls=addre[i].classList;
			if(cls.contains(active))
				cls.remove(active);
		}
	}
	
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
				var defaultSpan = $('span[addressId=' +cartArray[i].id + ']');
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