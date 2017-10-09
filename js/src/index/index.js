// define(["jquery", "api"],function ($, api) {
define(function (require) {
    var $ = require("jquery");
    var api = require("api");

    $("#contentBtn").on("click", function () {
        $("#messagebox").html("You have access jquery by using require()");
        console.log(api.COMMON.GET_USER_LIST);
    })
});