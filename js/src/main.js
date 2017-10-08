define(["jquery"], function ($) {
    $(document).on("click", "#contentBtn", function () {
        $("#messagebox").html("You have access jquery by using require()");
    })
});