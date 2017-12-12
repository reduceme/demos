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
	var checkboxVal = $('#'+ id + 'label input[type="checkbox"]:checked').map(function () {
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