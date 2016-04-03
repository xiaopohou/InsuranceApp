mui.init();
// 0 为默认状态，隐藏按钮未显示
btOpen = 0;

mui.plusReady(function() {
	getCartList();
});

//结算付款按钮-----------------for test
var buyingButton = document.getElementById("buying");
buyingButton.addEventListener('tap', function(event) {
	mui.openWindow('insur_card_buying.html','insur_card_buying');
});


//获取购物车列表
function getCartList() {
	//获取用户 uid
	var state = app.getState();
	uid = state.uid;
	
	var settings = app.getSettings();
	var webServiceUrl = settings.webServiceUrl;
	var imgUrl = settings.imgUrl;
	plus.nativeUI.toast("当前服务器地址为："+ webServiceUrl);
	
	///app/shoppingcart/list?id=memberID
	//url: "../../../json/goods/insur_card/card_cart.json"
	mui.ajax({
		url: webServiceUrl + "app/shoppingcart/list?id=" + uid,
		type: "post",
		async: true,
		data: {
		},
		dataType: "json",
		timeout: 1000,
		success: function(data) {
			if(data.status == 1){
				console.log(data.message);
				var order_list = document.getElementById("order_list");
				
				console.log(imgUrl);
				
				//循环遍历result数组，给数组中 img_big 添加 url 头属性
				for(var i = 0; i < data.result[0].jsonShoppingCarts.length; i++){
					data.result[0].jsonShoppingCarts[i].supplier_logo = imgUrl + data.result[0].jsonShoppingCarts[i].supplier_logo;
					data.result[0].jsonShoppingCarts[i].product_smallimg = imgUrl + data.result[0].jsonShoppingCarts[i].product_smallimg;
					
					console.log(data.result[0].jsonShoppingCarts[i].supplier_logo);
					console.log(data.result[0].jsonShoppingCarts[i].product_smallimg);
					
//							console.log(data.result[i].img_big);
				}
				
//						console.log(data.result[0].jsonShoppingCarts);
				
				var content = template("cartListTmpl", data.result[0]);
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
	
function initFunc(){
	//结算付款按钮
	var buyingButton = document.getElementById("buying");
	buyingButton.addEventListener('tap', function(event) {
		var numArray = getBtNumArray();
		setListNum(numArray);
		setTotalNumPrice();
		updataCartNum();
		mui.openWindow('insur_card_buying.html','insur_card_buying');
	});
	
	//同步隐藏的按钮num
	var numArray = getListNumArray();
	setBtNum(numArray);
	
	//计算总件数和总价
	setTotalNumPrice();
	
	document.getElementById("deleteAll").addEventListener('tap',function(){
		deleteAll();
	});
	
	mui(".list").on('tap','.state',function(){
		if(btOpen == 0){
//					console.log(btOpen);
			var numArray = getListNumArray();
			setBtNum(numArray);
		}else{
//			console.log(btOpen);
			var numArray = getBtNumArray();
			setListNum(numArray);
			setTotalNumPrice();
			
			//把修改的购物车列表json更新给服务器
			updataCartNum();
		}
		$('.state-fonts').each(function(){
//					console.log($(this).text());
			if($(this).text() == "编辑") {
				showNumBt();
				btOpen = 1;
				$(this).text("完成");
			}else{
				hideNumBt();
				btOpen = 0;
				$(this).text("编辑");
			}
		});
	});
	
	mui(".item").on('tap','.item-delete',function(){
		console.log("你进行了删除操作");
		var id = this.getAttribute('data-id');
		console.log(id);
		deleteCard(id);
	});
	
	mui(".mui-numbox").on('tap','.bt-plus',function(){
		var id = this.getAttribute('data-id');
//		console.log(id);
		addNum(id);
	});
	
	mui(".mui-numbox").on('tap','.bt-minus',function(){
		var id = this.getAttribute('data-id');
//		console.log(id);
		minusNum(id);
	});
	
	function addNum(id){
		num = parseInt($('.mui-input-numbox[data-id=' + id + ']').val());
		if(num > 0 && num < 10){
			num = num + 1;
		}else if(num != 1 || num != 10){
			num = 1;
		}
		console.log(num);
		$('.mui-input-numbox[data-id=' + id + ']').val(num);
	}
	
	function minusNum(id){
		num = parseInt($('.mui-input-numbox[data-id=' + id + ']').val());
		if(num > 1 && num <= 10){
			num = num - 1;
		}else if(num != 1 || num != 10){
			num = 10;
		}
		console.log(num);
		$('.mui-input-numbox[data-id=' + id + ']').val(num);
	}
	
	function deleteCard(id){
		$('.list[data-id=' + id + ']').hide();
		$('.mui-input-numbox[data-id=' + id + ']').val(0);
		$('.nums-p[data-id=' + id + ']').text(0);
		setTotalNumPrice();
	}

	//清空购物车
	function deleteAll(){
		$('.mui-input-numbox').each(function(){
			$(this).val(0);
		});
		$('.nums-p').each(function(){
			$(this).text(0);
		});
		setTotalNumPrice();
		$('.list').hide();
		
		updataCartNum();
	}
	
	
	//点击编辑时，显示出编辑控件，隐藏价格控件
	function showNumBt() {
		$('.item-num').each(function() {
			$(this).show();
		});
		$('.item-delete').each(function() {
			$(this).show();
		});
		$('.item-pay').each(function() {
			$(this).hide();
		});
		$('.item-info').each(function() {
			$(this).hide();
		});
	}
	
	//点击完成时，隐藏编辑控件，显示价格控件
	function hideNumBt() {
		$('.item-info').each(function() {
			$(this).show();
		});
		$('.item-pay').each(function() {
			$(this).show();
		});
		$('.item-delete').each(function() {
			$(this).hide();
		});
		$('.item-num').each(function() {
			$(this).hide();
		});
	}
	
	//获取价格单上的物品件数数组
	function getListNumArray(){
		var numArray = [];
		$('.nums-p').each(function(){
			var str = $(this).text();
			str = str.replace(/[^0-9]*/g,"");
			num = parseInt(str);
			numArray.push(num);
		});
//			console.log(numArray);
		return numArray;
	}
	//获取价格单上的物品价格数组
	function getListPriceArray(){
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
	
	//设置按钮上物品件数
	function setBtNum(numArray){
		var numArr = numArray;
		$('.mui-input-numbox').each(function(){
//				$(this).text(numArr.shift());
//				console.log(numArr.shift());
			$(this).val(numArr.shift());
		});
	}
	
	//获取按钮上的物品件数
	function getBtNumArray(){
		var numArray = [];
		$('.mui-input-numbox').each(function(){
			var str = $(this).val();
			str = str.replace(/[^0-9]*/g,"");
//				console.log(str);
			num = parseInt(str);
			numArray.push(num);
		});
		console.log(numArray);
		return numArray;
	}
	
	//获取json 键值对数组，保存产品 id 和 num信息
	function getNumJsonArray(){
		var numJsonArray = [];
		
		$(".mui-input-numbox").each(function(){
			
			var card_id = $(this).attr("data-id");
			var str = $(this).val();
			
			str = str.replace(/[^0-9]*/g,"");
			num = parseInt(str);
			
			var numJson = {
				id : card_id,
				num : num
			};
			
			numJsonArray.push(numJson);
		});
		
		return numJsonArray;
	}
	
	//设置价格单上物品件数
	function setListNum(numArray){
		var numArr = numArray;
		$('.nums-p').each(function(){
//				$(this).text(numArr.shift());
//				console.log(numArr.shift());
			$(this).text(numArr.shift());
		});
	}
	
    //计算总件数和总价，并进行设置
    function setTotalNumPrice(){
    	var numArray = getListNumArray();
    	var priceArray = getListPriceArray();
    	var totalNum = 0;
    	var totalPrice = 0.00;
    	for (i = 0; i < numArray.length; i++) {
    		totalNum += numArray[i];
    		totalPrice += numArray[i] * priceArray[i];
    	}
    	$("span#totalNum").text(totalNum);
    	$("span#totalprice-p").text(totalPrice);
    }
    

	//更新服务器卡单产品件数
	function updataCartNum(){
		var state = app.getState();
		uid = state.uid;
		
		var settings = app.getSettings();
		var webServiceUrl = settings.webServiceUrl;
		
		var jsonShoppingCartModifies = [];
		var numJsonArray = getNumJsonArray();
		
		//测试------------------------------------------------
		console.log("uid：" + uid);
		for(var i = 0; i<numJsonArray.length; i++){
			console.log("id：" + numJsonArray[i].id +"，num：" +  numJsonArray[i].num);
		}
		//测试------------------------------------------------
		jsonShoppingCartModifies = numJsonArray;
		
		var jsObj = {
            "member_id": uid,
            "jsonShoppingCartModifies":jsonShoppingCartModifies
        	};

	    var str = JSON.stringify(jsObj);
		
//		url: "../../../json/goods/insur_card/product_change_return.json",
		
		
		mui.ajax({
			url: webServiceUrl + "app/shoppingcart/modify",
			type: "post",
			async: true,
			data: {
				 "reqJsonStr":str
				},
			dataType: "json",
			timeout: 1000,
			success: function(data) {
				if(data.status == 1){
					plus.nativeUI.toast("购物车修改成功");
				}else{
					plus.nativeUI.toast("购物车修改失败");
				}
			},
			error:function(xhr,type,errorThrown){
				//异常处理
				plus.nativeUI.toast("网络不通畅，请检查网络状态重试");
				console.log(type);
			}
		});
	}
}
	
