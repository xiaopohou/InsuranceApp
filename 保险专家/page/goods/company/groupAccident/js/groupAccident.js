mui.init();

var showItem = document.getElementById('tab');
var companyPicker = new mui.PopPicker();			//公司选择器
var addButton = document.getElementById('addBt'); 	 //获取添加按钮

mui.plusReady(function() {
	var settings = app.getSettings();
	var webServiceUrl = settings.webServiceUrl;
	console.log(webServiceUrl);
	
	//定义变量 当test 为 true时，为本地json 测试
	var test = true;
	
	if(test){
		console.log("团体意外险本地测试中");
		var ajaxUrl = 'json/groupAccident.json';
		var data = {};
		
		getGroupAcci(ajaxUrl,data,function(data){
			if(data.status == 1){
				//缓存解析的数据
				var groupAcciData = JSON.stringify(data);
				plus.storage.setItem("groupAcciData",groupAcciData);
				
				//解析获得保险公司信息
				var companyData = getCompanyData(data);
				//添加到选择器中
				setCompanyPicker(companyData);
				
			}else{
				console.log(data.message);
			}
		});
	}
	
	//ajaxUrl,data,callback
	
	//提交计划书
	document.getElementById("submitPlan").addEventListener('tap', function() {
		mui.openWindow({
			id: 'myOrder_groupAccident',
			url: '../../../myOrder/myOrder_groupAccident.html'
		});
	});
	
	//单位名称设置
	document.getElementById("companyNameLi").addEventListener('tap',function(){
		console.log("hello");
		var ansArray = ['取消','确定'];
		mui.prompt("请输入：","请在此填写单位名称","填写单位名称", ansArray ,function(e){
			$('#unit_name').text(e.value);
		});
	});
	
	
});

//解析出公司
function getCompanyData(data){
	// 解析 服务器返回来的 json 对象
	var resultArr = data.result;
	// 定义 保险公司data数组
	var companyData = [];
	
	for(var i = 0; i < resultArr.length; i++){
		var supplierTittle = resultArr[i].supplierTitle;
		var compObj = {};
		console.log(supplierTittle);
		compObj.text = supplierTittle;
		compObj.value = i + 1;
		
		companyData.push(compObj);
	};
	
	return companyData;
}


//设置公司选择器
function setCompanyPicker(companyData){
	companyPicker.setData(companyData);
}


//保险公司计数器
var count = 0;
addButton.addEventListener('tap', function(event) {
	companyPicker.show(function(items) {
		
//		<li class="current">平安</li>
		var liStr = new Array();
		var dataValue = items[0].value;
		var dataText = items[0].text;
		
		var companyText = $("li[data="+ dataValue +"]").text() || "";
		
		
		//对公司添加操作进行过滤
		if(companyText.trim() != ""){
			plus.nativeUI.toast("不可重复添加保险公司");
		}else{
			var groupAcciData = plus.storage.getItem("groupAcciData");
			
			//将原始ul display 置为 none
			$('#content ul').css('display', 'none');
			//删除所有 tab li 中的 current 标记
			$('#tab li').removeClass("current");
			
			liStr.push("<li class=\"current\" data=\""+ dataValue  + "\">" + dataText + "</li>");
			console.log(liStr[0]);
			$("#tablist").append(liStr.join(""));
			
	//		<ul class="mui-table-view">
	//			<li class="mui-table-view-cell">
	//				<div class="mui-table">
	//					<label class="input-label">中国新华-保障计划</label>
	//					<button class="mui-btn mui-text-right deletBt">删除</button>
	//				</div>
	//			</li>
	//		</ul>
			
			addInsur(dataText,dataValue,groupAcciData);
		}
		
//		//将第一个保险公司置为 current
//		if(count == 0){
//			$('#tab li').addClass('current');
//			$('#content ul').css('display', 'block');
//			count++;
//		}
		test();
		deleteBt();
	});
}, false);


//获取 groupAcci 团体意外险
function getGroupAcci(ajaxUrl,data,callback){
	mui.ajax(ajaxUrl,{
		data: data,
		dataType : 'json',
		type : 'post',
		timeout : 8000,
		beforeSend: function(){
			plus.nativeUI.showWaiting();
		},
		complete: function(){
			plus.nativeUI.closeWaiting();
		},
		success: function(data){
			console.log(JSON.stringify(data));
			return callback(data);
		},
		error: function(xhr, type, errorThrown){
			console.log("服务器访问失败");
			plus.nativeUI.toast("网络暂时不通畅，请稍后重新访问");
			return callback();
		}
	});
}

//解析出所要添加的主险附加险
function addInsur(dataText,dataValue,groupAcciData){
	
	console.log(groupAcciData);
	var groupAcciData = JSON.parse(groupAcciData);
	var compArr = groupAcciData.result;
	
	//解析出所要添加的主险附加险
	for (var i = 0; i < compArr.length; i++) {
		if(dataText == compArr[i].supplierTitle){
			var attachesArr = compArr[i].attaches;
			var ulStr = new Array();
			//标题保障计划
			ulStr.push("<ul style=\"display:block;\" data=\""+ dataValue +"\"  class=\"mui-table-view\"> <li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\"> ");
			ulStr.push("<label class=\"input-label\">" + dataText + "-保障计划" + "</label>");
			ulStr.push("<button class=\"mui-btn mui-text-right deletBt\" data = \"" + dataValue + "\">删除</button>");
			ulStr.push("</div></li>");
			
			//主险
			ulStr.push("<li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\">");
			ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + compArr[i].productTitle + "</span> </div>");
			ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "10万元" + "</span> </div>");
			ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
			
			//附加险
			for(var j = 0;j < attachesArr.length;j++){
				ulStr.push("<li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\">");
				ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + attachesArr[j].productTitle + "</span> </div>");
				ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "不投保" + "</span> </div>");
				ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
			}
			
		
			//结尾ul
			ulStr.push("</ul>");
			$("#content") .append(ulStr.join(""));	
			
		}
	}
	
	
//	var ulStr = new Array();
//	//标题保障计划
//	ulStr.push("<ul style=\"display:block;\" data=\""+ dataValue +"\"  class=\"mui-table-view\"> <li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\"> ");
//	ulStr.push("<label class=\"input-label\">" + dataText + "-保障计划" + "</label>");
//	ulStr.push("<button class=\"mui-btn mui-text-right deletBt\" data = \"" + dataValue + "\">删除</button>");
//	ulStr.push("</div></li>");
//	
//	ulStr.push("<li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\">");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + "意外身故及伤残保险金" + "</span> </div>");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "5万元" + "</span> </div>");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
//	
//	ulStr.push("<li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\">");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + "意外医疗保险金" + "</span> </div>");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "2万元" + "</span> </div>");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
//	
//	ulStr.push("<li class=\"mui-table-view-cell rePlace\"> <div class=\"mui-table\">");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + "意外住院津贴保险金" + "</span> </div>");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "1万元" + "</span> </div>");
//	ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
//
//	//结尾ul
//	ulStr.push("</ul>");
//	$("#content") .append(ulStr.join(""));	
}




//删除按钮
function deleteBt(){
	$('.deletBt').each(function(){
		$(this)[0].addEventListener('tap',function(){
			console.log($(this).attr("data"));
			
			var deldata = $(this).attr("data");
			$('ul[data = \"'+ deldata +'\"]').remove();
			$('li[data = \"'+ deldata +'\"]').remove();
//			count--;
		});
	});
}

function test() {
	jQuery(function() {
		var $li = $('#tab li');
		var $ul = $('#content ul');
		$li.click(function() {
			var $this = $(this);
			var $t = $this.index();
			
			$li.removeClass();
			$this.addClass('current');
			$ul.css('display', 'none');
			$ul.eq($t).css('display', 'block');
		})
	});
}

//--------------------------------------主保险额选择器-------------------------------------
//选择器（多选）
//选择的内容定义

var money_main = new mui.PopPicker();

money_main.setData([{
	value: '5',
	text: '5万元'
}, {
	value: '10',
	text: '10万元'
}, {
	value: '15',
	text: '15万元'
}])

//定义 在哪里输出
var money_output = document.getElementById("money_output");

/*********多选************/
var showuserPickerButton = document.getElementsByClassName("money_main") //获取所有多选的元素
mui(".mui-table-view").on('tap', '.money_main', function(event) {
	money_main.show(function(items) {
		money_output.innerText = items[0].text;
	});
}, false);

//拟定
var dateSpan = $('#dateSpan')[0];
var btns = $('.btn');
btns.each(function(i, btn) {
	btn.addEventListener('tap', function() {
		var optionsJson = this.getAttribute('data-options') || '{}';
		var options = JSON.parse(optionsJson);
		var id = this.getAttribute('id');
		/*
		 * 首次显示时实例化组件
		 * 示例为了简洁，将 options 放在了按钮的 dom 上
		 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
		 */
		var picker = new mui.DtPicker(options);
		picker.show(function(rs) {
			/*
			 * rs.value 拼合后的 value
			 * rs.text 拼合后的 text
			 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
			 * rs.m 月，用法同年
			 * rs.d 日，用法同年
			 * rs.h 时，用法同年
			 * rs.i 分（minutes 的第二个字母），用法同年
			 */
			dateSpan.innerText = rs.text;
			/* 
			 * 返回 false 可以阻止选择框的关闭
			 * return false;
			 */
			/*
			 * 释放组件资源，释放后将将不能再操作组件
			 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
			 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
			 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
			 */
			picker.dispose();
		});
	}, false);
});



