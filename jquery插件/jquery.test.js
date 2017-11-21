//为了更好地兼容性，开始有个分号
;(function ($) {  //此处将$作为匿名函数的形参
    /*这里放置代码，可以使用$作为jquery的缩写别名*/
    $.fn.extend({
        //设置字体颜色
        "color": function (value) {
            //这里写插件代码
            return this.css("color", value);
        },
        //表格各行变色
        "alertBgColor": function (options) {
            options = $.extend({
                odd: "odd",
                even: "even",
                selected: "selected"
            }, options);

            $("tbody>tr:odd", this).addClass(options.odd);
            $("tbody>tr:even", this).addClass(options.even);
            $("tbody>tr", this).click(function () {
                var hasSelected = $(this).hasClass(options.selected);
                $(this)[hasSelected ? "removeClass" : "addClass"](options.selected).find(":checked").attr("checked", !hasSelected);
            });

            $("tbody>tr:has(:checked)", this).addClass(options.selected);
            return this;
        }
    })
})(window.jQuery);  //这里就将jQuery作为实参传递给匿名函数