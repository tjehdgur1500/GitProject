$(document).ready(function () {
    var elm = ".page-wrapper";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = $(window).scrollLeft();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter)
                            .next()
                            .offset().left;
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter)
                            .prev()
                            .offset().left;
                    } catch (e) {}
                }
            }

            // 화면 이동 0.8초(800)
            $("html,body")
                .stop()
                .animate({
                    scrollLeft: moveTop + "px"
                }, {
                    duration: 800,
                    complete: function () {}
                });
        });
    });

    function moveNavigation() {
        $(".main-list > li").click(function () {
            var idx = $(this).index();
            var wrapper = $(".page-wrapper");
            var tabScroll = wrapper.eq(idx + 1).offset().left;
            $("html, body")
                .stop()
                .animate({
                        scrollLeft: tabScroll
                    },
                    800
                );
        });

        $(".page-nav > li").click(function () {
            var navCount = $(this).index();
            var cuurentNav = $(".page-wrapper");
            var navMove = cuurentNav.eq(navCount + 1).offset().left;
            $("html, body")
                .stop()
                .animate({
                        scrollLeft: navMove
                    },
                    800
                );
        });

        $(".bottom_controls > li #update-btn").click(function () {
            var page = $(".page-wrapper");
            var movepage = page.eq(5).offset().left;
            $("html, body").stop().animate({
                scrollLeft: movepage
            }, 800);
        });

        $(".bottom_controls > li #buy-btn").click(function () {
            var page = $(".page-wrapper");
            var movepage = page.eq(6).offset().left;
            $("html, body").stop().animate({
                scrollLeft: movepage
            }, 800);
        });
    }

    function moveItem() {
        $(window).mousemove(function (event) {
            var dust = $(".dust");
            var x = event.pageX / 20 + "px";
            var y = event.pageY / -40 + "px";
            dust.css({
                bottom: y,
                left: x
            });
        });
    }

    function tabShow() {
        $(".imgs").hide();
        $(".imgs:first").show();
        $(".list_wrapper > li > img").click(function () {
            var idx = $(this).attr("rel");
            $(".imgs").hide();
            $("#" + idx).fadeIn();
            $(".list_wrapper > li > img").removeClass("add");
            $(this).addClass("add");
        });
        $(".list_wrapper > li > img")
            .eq(0)
            .trigger("click");

        $(".mode_content").hide();
        $(".mode_movie").hide();
        $(".mode_content:first").show();
        $(".mode_movie:first").show();

        $(".mode_inner > li").click(function () {
            var list = $(this).attr("obj");
            $(".mode_content").hide();
            $(".mode_movie").hide();
            $("#" + list).fadeIn();
            $("." + list).fadeIn();
        });

        $(".logo_inner").hide();
        $(".logo_inner:first").show();

        $("#char_1").addClass("add");

        $(".faction_list_item").click(function () {
            var faction = $(this).attr("rel");
            var idx = $(this).index();
            var charList = $(".img_box > img");
            $(".img_box").find("img").not("#char_" + idx + 1).removeClass("add");
            if (idx === 0) {
                charList.eq(0).addClass("add");
            } else if (idx === 1) {
                charList.eq(1).addClass("add");
            } else if (idx === 2) {
                charList.eq(2).addClass("add");
            } else if (idx === 3) {
                charList.eq(3).addClass("add");
            }

            $(".logo_inner").hide();
            $("#" + faction).fadeIn(1000);
        });
    }

    function init() {
        moveNavigation();
        moveItem();
        tabShow();
    }
    init();
});