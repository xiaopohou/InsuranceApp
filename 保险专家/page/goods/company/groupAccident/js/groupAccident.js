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
addButton.addEventListener('tap', function(event) {
	companyPicker.show(function(items) {
		
//		<li class="current">平安</li>
		var liStr = new Array();
		liStr.push("<li>" + items[0].text + "</li>");
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
		ulStr.push("<ul style=\"display:none;\" class=\"mui-table-view\"> <li class=\"mui-table-view-cell\"> <div class=\"mui-table\"> ");
		ulStr.push("<label class=\"input-label\">" + items[0].text + "-保障计划" + "</label>");
		ulStr.push("<button class=\"mui-btn mui-text-right deletBt\">删除</button>");
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
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-4 mui-text-right \"> <span class=\"\">" + "1万元" + "</span> </div>");
		ulStr.push("<div class=\"mui-table-cell mui-col-xs-1 mui-text-right\">  <a class=\"mui-navigate-right\"></a> </div> </div> </li>");
		
		//结尾ul
		ulStr.push("</ul>");
		$("#content") .append(ulStr.join(""));					
		
		

		
		
		
		
		test();
	});
}, false);


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
