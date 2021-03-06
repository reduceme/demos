/*datetime处理方法
 * 问题描述：
 * 后台返回的时间为：/Date(1493367117000)/
 * 需要把后台所返回的时间格式化
 * */

/*对外暴露的函数,替换掉/Date()/
 * time为需要替换的参数
 * format为需要替换成的格式
 * eg: convertTime(dt, "yyyy-MM-dd hh:mm:ss")
 * */
function convertTime(time, format) {
    //替换时间中的“/Date”和“)/”，并返回一个10进制的数
    var date = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10));
    var formatDate = date.format(format);
    return formatDate;
}

//扩展Date类型，用于格式化时间
Date.prototype.format = function (format) {
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    };

    //test()为js的内置函数，用于检测内部是否存在否个字符串
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
};

//格式化时间
function formatTime(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	var time = year + "-" + month + "-" + day + " " + "hour" + ":" + "minute" + ":" + "second";
	return time;
}

//获取URL参数，并返回对象
function GetRequest() {
    var url = decodeURI(decodeURI(location.search)); //获取url中"?"符后的字串，使用了两次decodeRUI解码
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
        return theRequest;
    }
}

//input只能输入数字
function isOnlyNum(id, childInfo) {
    $("#" + id).on("keyup", childInfo, function () {
        this.value = this.value.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
    })
}

//获取单选框选中的值
function getRadio(name){
	var radioVal = $('input:radio[name="'+name+'"]:checked').val();
	return radioVal;
}

//获取复选框选中的值并返回以“,”隔开的字符串
function getCheckBox(id){
	var checkboxVal = $('#'+ id + ' label input[type="checkbox"]:checked').map(function () {
        return $(this).val();
    }).get().join(',');
	
	return checkboxVal;
}

//对象去重
function objDelRepeat(data){
	var tmp = [];
	data.forEach(function(item){
		tmp[JSON.stringify(item)] = item;
	});
	data = Object.keys(tmp).map(function(item){
		return JSON.parse(item);
	});
	
	return data;
}

//对象分组
function objGroupByKey(){
	var map = {},
    dest = [];
	for(var i = 0; i < arr.length; i++){
		var ai = arr[i];
		if(!map[ai.id]){
			dest.push({
				id: ai.id,
				name: ai.name,
				data: [ai]
			});
			map[ai.id] = ai;
		}else{
			for(var j = 0; j < dest.length; j++){
				var dj = dest[j];
				if(dj.id === ai.id){
					dj.data.push(ai);
					break;
				}
			}
		}
	}
}

//函数去抖动，使用场景：函数防抖就是让某个函数在上一次执行后，满足等待某个时间内不再触发此函数后再执行，而在这个等待时间内再次触发此函数，等待时间会重新计算
(function(){
	/**
	 * 函数防抖
	 * @param  {Function} 调用的函数
	 * @param  {Int}      时间，单位毫秒
	 * @return {Function} 返回客户调用函数
	 */
	var debounce = function(action, time) {
		var timer = null;
		return function() {
			var context = this,
				args = arguments;

			clearTimeout(timer);
			timer = setTimeout(function() {
				action.apply(context, args);
			}, time);
		};
	};

	function doResize() {
		console.log(arguments);
	}

	var action = debounce(doResize, 500);
	$(window).on('resize', action);
})

//函数节流，使用场景：每间隔某个时间去执行某函数，避免函数的过多执行
(function(){
	/**
	 * 函数节流
	 * @param  {Function} 调用的函数
	 * @param  {Int}      时间，单位毫秒
	 * @return {Function} 返回客户调用函数
	 */
	var throttle = function(action, delay) {
		var last = 0;
		return function() {
			var curr = +new Date();
			if (curr - last > delay) {
				action.apply(this, arguments);
				last = curr;
			}
		};
	}

	function doInput() {
		console.log($(this).val());
	}

	var action = throttle(doInput, 1000);
	$('#txt').on('keyup', action);
})()

/**
 * 获取每月有多少天
 */
function getDaysNum(year, month){
	month = parseInt(month, 10);
	return new Date(year, month, 0).getDate();
}

/**
 * 获取每月第一天是星期几，0代表星期天，1代表星期一，以此类推
 */
function getDayOfWeek(year, month){
		month = parseInt(month, 10) - 1;
	return new Date(year, month).getDay();
}

/**
 * 质朴长存法。算法永远都是如此，要不是时间换空间，要不就是空间换时间。
 */
function pad(num, n){
	var len = parseInt(num, 10).toString().length;
	while(len < n){
		num = "0" + num;
		len++;
	}
	return num;
}

//ajax的contentType
function ajax(userInfo){
	$.ajax({
            method: "post",
            url: "/Write/DTP/SetDTPTag",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(userInfo),
            success: function (data) {
                if (data.Success) {
					//do something......
                }
            }
        })
}

//formData
function formData(){
	var formData = new FormData();
	formData.append("file", $('#upload').get(0).files[0]);
	
	$.ajax({
		method: 'post',
		url: '',
		data: formData,
		processData: false,  // 不处理数据
		contentType: false,   // 不设置内容类型
		success: function (data) {
			console.log(data);
		},
		error: function () {
		}
	})
}

//字符串分组
function splitStr(item, string) {
	var arr = item.split(",");
	var str = new RegExp(string);
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (str.test(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}

//checkbox取消选中
//对于HTML元素本身就带有的固有属性，在处理时，使用prop方法。
//对于HTML元素我们自己自定义的DOM属性，在处理时，使用attr方法。
function isChecked(){
	$("label input").map(function () {
		$(this).attr("checked", false).prop("checked", false);
	});
}

/*数组删除指定元素*/
Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) {
            this.splice(i, 1);
            break;
        }
    }
};

//数组去重，写入原型链
Array.prototype.deWeight = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
};