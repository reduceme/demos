var shape = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log("this inside popup():" + this.name);
        setTimeout(function () {
            console.log("this inside setTimeout()" + _this.name);
            console.log("I'm a " + _this.name + "!");
        }, 3000);
    }
};
shape.popup();
