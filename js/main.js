var doc = document;
$(function () {
    (function () {
        /** 响应式导航按钮 */
        $('body').on('click', '.nav-toggle', function (event) {
            var id = $(this).attr("data-target");
            var r = $(id).hasClass("nav-navicon");
            if (r) {
                $(id).removeClass('nav-navicon');
                $(this).addClass('listopen');
            } else {
                $(id).addClass('nav-navicon');
                $(this).removeClass('listopen');
            }
            event.stopPropagation();
        });
    })();
    /** 响应式 二级导航 */
    (function () {
        $('.nav-inline >li').click(function (e) {
            var r = $(this).hasClass('active');
            if (r) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active').siblings().removeClass('active');
            }
            //e.preventDefault();
        });
    })();
    /** 响应式 三级导航 */
    (function () {
        $('.drop-menu li').click(function (e) {
            var r = $(this).hasClass('active');
            if (r) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active').siblings().removeClass('active');
            }
            e.stopPropagation();
        });
    })();
    /** banner */
    (function () {
        var g_ban = doc.getElementById('g-ban');
        if (g_ban) {
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 5000, //可选选项，自动滑动
                loop: true, //可选选项，开启循环
                speed: 1000
            });
        }

    })();

});