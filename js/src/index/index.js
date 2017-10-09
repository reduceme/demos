define(["jquery", "api"],function ($, api) {
    $("#contentBtn").on("click", function () {
        $("#messagebox").html("You have access jquery by using require()");
        console.log(api.COMMON.GET_USER_LIST);
    })
});