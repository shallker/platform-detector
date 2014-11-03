/**
 * platform-detector
 *
 * 描述：
 * 用于运行平台的检测
 *
 * 当前：
 * 使用的技术是userAgent字符串的嗅探
 *
 * 计划：
 * 考虑使用功能检测（Feature Detection）技术来实现
 *
 * 作者：
 * 汪晓东（shallker.wang@gmail.com）
 */
;(function (exports) {
    var userAgent = navigator.userAgent;
    var ua = userAgent.toLowerCase();

    /**
     * 声明变量 platform
     */
    var platform;

    /**
     * 定义变量 platform 为对象类型
     */
    platform = {};

    /**
     * 定义所有的平台名称
     */
    platform.all = [
        'windows',
        'mac',
        'linux',
        'ipad',
        'iphone',
        'android',
        'windowsphone'
    ]

    /**
     * iPad平台匹配
     */
    var ipadMatch = /(ipad)/.exec(ua);

    if (ipadMatch) {
        platform.ipad = {};
    }

    /**
     * iPhone平台匹配
     */
    var iphoneMatch = /(iphone)/.exec(ua);

    if (iphoneMatch) {
        platform.iphone = {};
    }

    /**
     * Mac平台匹配
     */
    var macMatch = /(mac)/.exec(ua);

    if (macMatch) {
        platform.mac = {};
    }

    /**
     * Windows平台匹配
     */
    var windowsMatch = /(windows)/.exec(ua);

    if (windowsMatch) {
        platform.windows = {};
    }

    /**
     * Linux平台匹配
     */
    var linuxMatch = /(linux)/.exec(ua);

    if (linuxMatch) {
        platform.linux = {};
    }

    /**
     * 平台总结
     */
    for (var i = 0, name; name = platform.all[i]; i++) {
        if (name in platform) {
            platform.name = name;
        }
    }

    /**
     * 向外输出
     */
    exports.platform = platform;
})(this);
