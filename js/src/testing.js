/*
 * 请务必保证每个页面在load本文件后再载入main文件
 */
require.config( {

    // 插件类型才在此定义简化名称
    paths: {
        api: './libs/apis/bigwe_apis',
        h2Api: './libs/apis/h2_apis',
        /* jq插件 （第三方） start */
        dad: './libs/plug_in/jquery.dad.min',
        dateRange: './libs/plug_in/dateRange',
        blocksit: './libs/plug_in/blocksit.min',
        jquery: './libs/jquery/jquery.min',
        jqueryFrom: './libs/jquery/jquery.form',
        pagination: './libs/plug_in/jquery.pagination',
        retract: './libs/plug_in/retract',
        transit: './libs/jquery/jquery.transit',
        /* bootstrap */
        affix: './libs/bootstrap/affix',
        button: './libs/bootstrap/button',
        carousel: './libs/bootstrap/carousel',
        collapse: './libs/bootstrap/collapse',
        dropdown: './libs/bootstrap/dropdown',
        modal: './libs/bootstrap/modal',
        popover: './libs/bootstrap/popover',
        scrollspy: './libs/bootstrap/scrollspy',
        selector: './libs/bootstrap/selector', // selector插件依赖于bootstrap的dropdown插件
        tab: './libs/bootstrap/tab',
        tooltip: './libs/bootstrap/tooltip',
        transition: './libs/bootstrap/transition',
        /* 微知modules start */
        ajax: './modules/ajax',
        artCategoryHandle: './modules/artCategoryHandle',
        article_import: './modules/article_import',
        articles_choose: './modules/articles_choose',
        bigwe_utils: './modules/bigwe_utils',
        bigwe_component: './modules/bigwe_component',
        bigweNotice: './modules/bigweNotice',
        constants: './modules/constants',
        ceb: './modules/commonEventBind',
        combiner: './modules/aside_combiner',
        fullcalendar: './libs/plug_in/fullcalendar',
        guide_wrap: './modules/guide_wrap',
        header: './modules/header',
        imgUploader: './modules/image_uploader',
        imgChoose: './modules/my_images_choose',
        login: './modules/login',
        message: './modules/message',
        mpnewsChoose: './modules/my_mpnews_choose',
        nav: './modules/nav',
        picture_browser: './modules/picture_browser',
        plat_public: './modules/platform_public',
        startNotice: './modules/startNotice',
        spread_filter: './modules/spread_filter',
        usergroup_manage: './modules/usergroup_manage',
        videoUploader: './modules/video_uploader',
        videoChoose: './modules/my_video_choose',
        // 未认证微信号登录授权
        sendPreview: './modules/send_preview',
        // ue编辑器
        ueditor: './modules/ueditor',
        unauthor: './modules/unauthor',
        /* 微知config */
        artCategory: './config/artCategoryConfig',
        imgCategory: './config/imgCategoryConfig',
        indusCategory: './config/industryCategoryConfig',
        /* 第三方插件 */
        artTemplate: './libs/plug_in/artTemplate',
        qiniu: './libs/plug_in/qiniu/qiniu',
        plupload: './libs/plug_in/qiniu/plupload.full.min',
        /* ueditor */
        ueditorCore: './libs/ueditor/ueditor.all.min',
        ueditorConfig: './libs/ueditor/ueditor.config',
        a92d301d77: './libs/ueditor/a92d301d77',
        styleFilter: './libs/ueditor/styleFilter'
    },
    // 配置非AMD规范的插件依赖
    shim: {
        qiniu: {
            deps: [ 'plupload' ]
        }
    },
    // 永不超时
    waitSeconds: 0

} );