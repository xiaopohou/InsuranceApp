mui.init();

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
	//地址 id
	var addressId = 0;
	//活动样式名
	var active="address-active";
	//标记
	var flag;
	
	setDefault(data);
	
	function setDefault(data){
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
				
//				defaultSpan.text("(默认地址)");
				
				//给 默认 div 对象添加背景样式
//				console.log(listDiv.html());
//				listDiv.addClass("address-active");
				
				
				
//				defaultDiv.addClass("order-address");
			}
		}
		
	}

	mui(".mui-content").on('tap','.order-address',function(){
		var attr=this.classList;
		if(!attr.contains(active)){
			changeDef();
			attr.add(active);
			flag=this;
		}
		
		//地址 id 
		addressId = this.getAttribute("addressId");
		plus.storage.setItem('modifyAdrId',addressId);
		
//		mui.openWindow('insur_card_address_modify_2.html','insur_card_address_modify_2');
		mui.openWindow({
			url : 'insur_card_address_modify_2.html',
			id : 'insur_card_address_modify_2',
			extras : {
				'addressId' : addressId
			}
		});
	});
	
	function changeDef(){
		var addre=document.getElementsByClassName("order-address");
		for(var i=0;i<addre.length;i++){
			var cls=addre[i].classList;
			if(cls.contains(active))
				cls.remove(active);
		}
	}
	
//	var btn_set=document.getElementById("setDefBt");
//	btn_set.addEventListener('tap',function(){
//		if(flag){
//		var par=flag.parentNode;
//		var addre=document.getElementsByClassName("order-address")[0];
//		par.insertBefore(flag,addre);
//		}
//		
//	});
}