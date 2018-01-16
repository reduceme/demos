;$.creatLeftNav = function (options) {
    /**
     * @param firstNav  一级菜单集合（为一数组）
     * @param secondNav 二级菜单集合（为一对象，key为匹配的一级菜单，value为二级菜单内容）
     * @param thirdNav  三级菜单集合（为一对象，对象里面包含对象，一级对象key为指定的一级菜单，value为二级菜单与三级菜单的映射关系）
     * @param width     菜单栏宽度（px）
     * */
    /**
     * 创建一级菜单
     * */
    function createFirst() {
        var width = options.width || '150px';
        isNullOrArray(options.firstNav);
        for (var i = 0; i < options.firstNav.length; i++) {
            var html = "<div id=leftNav" + i + " class='nav-left-first'>" + options.firstNav[i] + "<span class='icon-chevron-right pull-right fir-jiantou-align'></span></div>";
            $('.' + options.content).css({'width': width, 'height': '300px'}).append(html);
        }
    }

    /**
     * 在指定的一级菜单下创建二级菜单
     * */
    function createSecond() {
        if (options.firstNav === null) {
            throw new Error('element is null');
        }
        isNullOrArray(options.secondNav);
        $.each($('.nav-left-first'), function () {
            for (var item in options.secondNav) {
                if (item === $(this).text()) {
                    var secondNavClass = $(this).attr('id') + '-sec-container';
                    var secContainer = $('<div class="' + secondNavClass + '"></div>');
                    var html = '';
                    for (var i = 0; i < options.secondNav[item].length; i++) {
                        html = $("<div id=" + $(this).attr('id') + i + " class='nav-left-sec'>" + options.secondNav[item][i] + "<span class='icon-chevron-right pull-right sec-jiantou-align'></span></div>");
                        html.appendTo(secContainer);
                    }
                    $(this).after(secContainer)
                }
            }
        })
    }

    /**
     * 在指定的一级菜单的二级菜单下创建三级菜单
     * */
    function createThird() {
        if (options.firstNav === null || options.secondNav === null) {
            throw new Error('element is null');
        }
        $.each($('.nav-left-first'), function () {
            for (var item in options.thirdNav) {
                if (item === $(this).text()) {
                    var $selectList = $(this).next().children();
                    $.each($selectList, function () {
                        var className = $(this).attr('id') + '-thr-container';
                        for (var secondItem in options.thirdNav[item]) {
                            if (secondItem === $(this).text()) {
                                var $thrContainer = $("<div class=" + className + "></div>");
                                for (var i = 0; i < options.thirdNav[item][secondItem].length; i++) {
                                    var $tn = $("<div id=" + $(this).attr('id') + i + " class='nav-left-thr'>" + options.thirdNav[item][secondItem][i] + "<span class='icon-chevron-right pull-right thr-jiantou-align'></span></div>");
                                    $tn.appendTo($thrContainer);
                                }
                                $(this).after($thrContainer);
                            }
                        }
                    })
                }
            }
        })
    }



    /**
     * 判断是否为空或者空数组
     * @param ele
     * */
    function isNullOrArray(ele) {
        if (ele === null) {
            throw new Error('element is null');
        }

        if (!ele instanceof Array) {
            throw new Error('element is not a array');
        }
    }

    function initChildNavClick(level, container) {
        $.each($('.' + level), function () {
            var className = $(this).attr('id') + '-' + container;
            if ($(this).next().hasClass(className)) {
                $('.' + className).hide();
                var bool = true;
                $(this).click(function (event) {
                    if (bool) {
                        $(this).find("span").removeClass("icon-chevron-right").addClass("icon-chevron-down");
                        $("." + className).show(100);
                        bool = false;
                    } else {
                        $(this).find("span").removeClass("icon-chevron-down").addClass("icon-chevron-right");
                        $("." + className).hide(100);
                        bool = true;
                    }
                    event.stopPropagation();
                })
            }
        })
    }

    var leftNavFactory = {
        /**
         * 若只有二级菜单，则用如下函数初始化
         */
        initFirSec: function () {
            createFirst();
            createSecond();
            initChildNavClick("nav-left-first", "sec-container");

        },
        /**
         * 若存在三级菜单，则用如下函数初始化
         */
        initLeftNav: function () {
            createFirst();
            createSecond();
            createThird();
            initChildNavClick("nav-left-first", "sec-container");
            initChildNavClick("nav-left-sec", "thr-container");
        }
    };

    return leftNavFactory;
};