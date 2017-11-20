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