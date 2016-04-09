mui.init();

var showItem = document.getElementById('tab');       

mui.plusReady(function() {
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

var companyPicker = new mui.PopPicker(); 			 //公司选择器
companyPicker.setData([{
	value: 'xinhua',
	text: '新华'
}, {
	value: 'renshou',
	text: '人寿'
},{
	value: 'pingan',
	text: '平安'
}]);


var addButton = document.getElementById('addBt'); 	 //获取添加按钮
//保险公司计数器
var count = 0;
addButton.addEventListener('tap', function(event) {
	companyPicker.show(function(items) {
		
//		<li class="current">平安</li>
		var liStr = new Array();
		var dataValue = items[0].value;
		var dataText = items[0].text;
		
		liStr.push("<li data=\""+ dataValue  + "\">" + dataText + "</li>");
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
		var ulStr = new Array();
		//标题保障计划
		ulStr.push("<ul style=\"display:none;\" data=\""+ dataValue +"\"  class=\"mui-table-view\"> <li class=\"mui-table-view-cell\"> <div class=\"mui-table\"> ");
		ulStr.push("<label class=\"input-label\">" + dataText + "-保障计划" + "</label>");
		ulStr.push("<button class=\"mui-btn mui-text-right deletBt\" data = \"" + dataValue + "\">删除</button>");
		ulStr.push("</div></li>");
		
		
//				<li class="mui-table-view-cell">
//					<div class="mui-table">
//						<div class="mui-table-cell mui-col-xs-10">
//							<span class="">主险保额</span>
//						</div>
//						<div class="mui-table-cell mui-col-xs-4 mui-text-right">
//							<span class="">1万元</span>
//						</div>
//						<div class="mui-table-cell mui-col-xs-1 mui-text-right">
//							<a class="mui-navigate-right"></a>
//						</div>
//					</div>
//				</li>		

		ulStr.push("<li class=\"mui-table-view-cell\"> <div class=\"mui-table\">");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + "意外身故及伤残保险金" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "5万元" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
		
		ulStr.push("<li class=\"mui-table-view-cell\"> <div class=\"mui-table\">");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + "意外医疗保险金" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "2万元" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
		
		ulStr.push("<li class=\"mui-table-view-cell\"> <div class=\"mui-table\">");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-10\"> <span class=\"\">" + "意外住院津贴保险金" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "1万元" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
		
		
		//结尾ul
		ulStr.push("</ul>");
		$("#content") .append(ulStr.join(""));	
		
		
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



