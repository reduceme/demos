$('#dateTimePicker').datetimepicker({
    format: "yyyy-mm-dd",
    // timepicker: false,
    autoclose: true,
    minView: "month"
});

/*artTemplate*/
var artTemplateData = {
    data: [{
        index: "1",
        userId: "12",
        userName: "Trump1",
        age: "961",
        birthday: "2017-11-131",
        nation: "USA1",
        sex: "male1"
    }, {
        index: "2",
        userId: "132",
        userName: "Trump2",
        age: "962",
        birthday: "2017-11-132",
        nation: "USA2",
        sex: "male2"
    }, {
        index: "3",
        userId: "143",
        userName: "Trump3",
        age: "963",
        birthday: "2017-11-133",
        nation: "USA3",
        sex: "male3"
    }, {
        index: "4",
        userId: "154",
        userName: "Trump4",
        age: "964",
        birthday: "2017-11-134",
        nation: "USA4",
        sex: "male4"
    }, {
        index: "5",
        userId: "165",
        userName: "Trump5",
        age: "965",
        birthday: "2017-11-135",
        nation: "USA5",
        sex: "male5"
    }]
};

$("#contentBtn").on("click", function () {
    //artTemplate渲染
    var html = template("userTemplate", artTemplateData);
    $("#userList").html(html);
});

/*相当于表头*/
var cols = [{
    title: "userId",
    name: "userId",
    width: 180,
    sortable: true,
    align: 'center',
    renderer: function (val, item) {
        return val
    }
}, {
    title: "userName",
    name: "userName",
    width: 180,
    sortable: true,
    align: 'center',
    renderer: function (val, item) {
        return val
    }
}, {
    title: "age",
    name: "age",
    width: 180,
    sortable: true,
    align: 'center',
    renderer: function (val, item) {
        return val
    }
}, {
    title: "birthday",
    name: "birthday",
    width: 180,
    sortable: true,
    align: 'center',
    renderer: function (val, item) {
        return val
    }
}, {
    title: "nation",
    name: "nation",
    width: 180,
    sortable: true,
    align: 'center',
    renderer: function (val, item) {
        return val
    }
}, {
    title: "sex",
    name: "sex",
    width: 180,
    sortable: true,
    align: 'center',
    renderer: function (val, item) {
        return val
    }
}]

/*表格
 * 官方参数说明，支持ajax加载数据，以下示例为使用本地数据加载
 * http://miemiedev.github.io/mmGrid/examples/api.html
 * */
var mmg = $('.mmg').mmGrid({
    width: "auto"
    , height: 200
    //表头
    , cols: cols
    //使用本地数据作为表单数据
    , items: artTemplateData.data
    // 显示列索引
    , indexCol: true
    //数据加载时的提示文字
    , loadingText: "正在加载……"
    //没数据时的提示文字
    , noDataText: "暂无数据"
    //加载异常提示文字
    , loadErrorText: "加载异常"
    //默认的排序字段
    , sortName: "userId"
    //排序方向
    , sortStatus: "asc"
    //是否显示选中行
    , checkCol: true
    //行多选
    , multiSelect: true
    //数据操出列宽是否换行
    , nowrap: true
    //分页
    , plugins: [
        $('#pg').mmPaginator({
            style: 'plain'
            , totalCountName: 'totalCount'
            , page: 1
            , pageParamName: 'page'
            , limitParamName: 'limit'
            , limitLabel: '每页{0}条'
            , totalCountLabel: '共<span>{0}</span>条记录'
            , limit: undefined
            , limitList: [10, 20, 30, 40, 50]

        })
    ]
});

/*省市联动*/
new PCAS("province", "city", "area", "", "", "");


/*下拉框中文说明文档
 * https://www.cnblogs.com/fanbi/p/7121306.html
 *
 * 下拉框英文官网
 * http://silviomoreto.github.io/bootstrap-select/options/
 *
 * 功能演示
 * http://www.jq22.com/yanshi9812
 * */

/*下拉框默认选中*/
$('#select2').selectpicker('val', ["1", "2", "3"]);　
