define(function (require) {
    var $ = require("jquery");
    var api = require("api");
    var datetimepicker = require("datetimepicker");
    var fileinput = require("fileinput");
    var artTemplate = require("artTemplate");

    /*dateTimePicker*/
    $('#dateTimePicker').datetimepicker({
        format: "yyyy-mm-dd",
        timepicker: false,
        autoclose: true,
        minView: "month"
    });


    /*artTemplate*/
    var artTemplateData = {
        data: [{
            userId: "12",
            userName: "Trump",
            age: "96",
            birthday: "2017-11-13",
            nation: "USA",
            sex: "male"
        },{
            userId: "12",
            userName: "Trump",
            age: "96",
            birthday: "2017-11-13",
            nation: "USA",
            sex: "male"
        },{
            userId: "12",
            userName: "Trump",
            age: "96",
            birthday: "2017-11-13",
            nation: "USA",
            sex: "male"
        },{
            userId: "12",
            userName: "Trump",
            age: "96",
            birthday: "2017-11-13",
            nation: "USA",
            sex: "male"
        },{
            userId: "12",
            userName: "Trump",
            age: "96",
            birthday: "2017-11-13",
            nation: "USA",
            sex: "male"
        }]
    };

    /*api*/
    $("#contentBtn").on("click", function () {
        $("#messagebox").html("大吉大利，晚上吃鸡。");
        alert(api.COMMON.GET_USER_LIST);

        //artTemplate渲染
        var html = template("userTemplate", artTemplateData);
        $("#userList").html(html);
    });
});