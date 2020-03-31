$(document).ready(function() {
  function tabChange() {
    $(".icon_list").hide();
    $(".icon_list:first").show();

    $(".tab_nav .tabs").click(function() {
      var count = $(this).attr("obj");
      $(".icon_list").hide();
      $("#" + count).show();

      $(".tab_nav .tabs").removeClass("on");
      $(this).addClass("on");
    });
    $(".tab_nav .tabs")
      .eq(0)
      .trigger("click");
  }

  function tabShow() {
    var idNumber = [
      "window01",
      "window02",
      "window03",
      "window04",
      "window05",
      "window06",
      "window07"
    ];

    $("[id^=icon]").click(function(event) {
      event.preventDefault();
      var idx = $(this)
        .attr("id")
        .match(/\d+/);
      if (idx == 1) {
        $("#" + idNumber[0]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[0]).addClass("on");
      } else if (idx == 2) {
        $("#" + idNumber[1]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[1]).addClass("on");
      } else if (idx == 3) {
        $("#" + idNumber[2]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[2]).addClass("on");
      } else if (idx == 4) {
        $("#" + idNumber[3]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[3]).addClass("on");
      } else if (idx == 5) {
        $("#" + idNumber[4]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[4]).addClass("on");
      } else if (idx == 6) {
        $("#" + idNumber[5]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[5]).addClass("on");
      } else if (idx == 7) {
        $("#" + idNumber[6]).addClass("on");
        $(".right_item_window").removeClass("on");
        $("#" + idNumber[6]).addClass("on");
      }
    });

    $(".close_btn").click(function() {
      $(".right_item_window").removeClass("on");
    });
  }

  function showDetail() {
    var showBtn = $(".show_link");
    $(showBtn).on("click", function(e) {
      e.preventDefault();

      var count = $(this).attr("rel");
      $("#" + count).addClass("show");
    });
    $(".close_btn").click(function() {
      $(".show_ground").removeClass("show");
    });
  }

  function timer() {
    var timerinner = document.querySelector(".clock_title");
    var toTime = new Date(),
      years = toTime.getFullYear(),
      month = toTime.getMonth() + 1,
      day = toTime.getDate(),
      hours = toTime.getHours(),
      min = toTime.getMinutes(),
      sec = toTime.getSeconds();

    timerinner.innerHTML =
      years +
      "." +
      (month < 10 ? "0" + month : month) +
      "." +
      (day < 10 ? "0" + day : day) +
      "<br>" +
      (hours < 10 ? "0" + hours : hours) +
      ":" +
      (min < 10 ? "0" + min : min) +
      ":" +
      (sec < 10 ? "0" + sec : sec);
  }

  function scrollNavgation() {
    var navList = $("#gnb > ul > li");

    $("#main_section").keydown(function() {
      $(this).focus();
      var sectionTwo = $("section")
        .eq(1)
        .offset().top;
      $("html,body")
        .stop()
        .animate(
          {
            scrollTop: sectionTwo
          },
          1000,
          "easeInOutQuint"
        );
    });

    $(navList).on("click", function() {
      var idx = $(this).index();
      var tops = $("section")
        .eq(idx)
        .offset().top;
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: tops
          },
          1000,
          "easeInOutQuint"
        );
    });

    $(window).scroll(function() {
      var scroll = $(this).scrollTop();
      var list = $("section")
          .eq(1)
          .offset().top,
        list2 = $("section")
          .eq(2)
          .offset().top,
        list3 = $("section")
          .eq(3)
          .offset().top,
        list4 = $("section")
          .eq(4)
          .offset().top,
        firstlist = $("section")
          .eq(0)
          .offset().top;
      var listDiv = $("#gnb>ul>li>a");

      if (scroll > firstlist - 1) {
        listDiv.removeClass("liner");
        listDiv.eq(0).addClass("liner");
      }
      if (scroll > list - 1) {
        listDiv.removeClass("liner");
        listDiv.eq(1).addClass("liner");
      }
      if (scroll > list2 - 1) {
        listDiv.removeClass("liner");
        listDiv.eq(2).addClass("liner");
      }
      if (scroll > list3 - 1) {
        listDiv.removeClass("liner");
        listDiv.eq(3).addClass("liner");
      }
      if (scroll > list4 - 1) {
        listDiv.removeClass("liner");
        listDiv.eq(4).addClass("liner");
      }
    });
  }

  // IE wheel issue
  if (navigator.userAgent.match(/Trident\/7\./)) {
    $("body").on("mousewheel", function() {
      event.preventDefault();

      var wheelDelta = event.wheelDelta;
      var currentScrollPostion = window.pageYOffset;
      window.scrollTo(0, currentScrollPostion - wheelDelta);
    });

    $("body").keydown(function(e) {
      e.preventDefault();
      var currentScrollPostion = window.pageYOffset;

      switch (e.which) {
        case 38:
          window.scrollTo(0, currentScrollPostion - 120);
          break;
        case 40:
          window.scrollTo(0, currentScrollPostion + 120);
          break;
        default:
          return;
      }
    });
  }

  function navControl() {
    var gnb = $("#gnb");
    var btnControl = $("#gnb .btn_close");
    var btnImg = $(".btn_close > p > img");
    var itemMonster = $(".packman");

    $(btnControl).on("click", function() {
      gnb.toggleClass("active");
      btnImg.toggleClass("active");
      itemMonster.toggleClass("active");
    });

    var PageText = $(".page_Text").hide();
    $("#gnb>ul>li>a").on("mousemove", function(event) {
      var x = event.offsetX;
      var y = event.offsetY;
      $(this)
        .prev(PageText)
        .show()
        .css({
          position: "absolute",
          top: y,
          left: x,
          "z-index": 1000
        });
    });
    $("#gnb>ul>li>a").on("mouseout", function() {
      PageText.hide();
    });
  }

  function PlayTitle() {
    var playtitle = $(".text_main");

    playtitle.toggleClass("play");
  }

  function init() {
    tabChange();
    tabShow();
    showDetail();
    scrollNavgation();
    navControl();
    setInterval(timer, 1000);
    setInterval(PlayTitle, 500);
  }
  init();
});
