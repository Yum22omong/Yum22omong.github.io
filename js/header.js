$(document).ready(function () {
  let isOpen = false; // 초기 상태는 닫힘(false)
  let isLight = true;

  var header = $(".my-header-style");
  var bodyTag = $("body");
  var progressTag = $(".scroll_top_progress");
  var changeHeaderOn = 100; //스크롤 100px 이상일 때 헤더 색상 변경

  //100px 스크롤 하면 헤더색깔 바꾸는거
  $(window).scroll(function () {
    if ($(window).scrollTop() > changeHeaderOn) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });

  //스크롤 하는거에 따라 바 늘어나는거
  $(document).on("scroll", function () {
    var pixels = $(window).scrollTop();
    var pageHeight = bodyTag[0].getBoundingClientRect().height;
    var totalHeight = pageHeight - $(window).height();
    var percentage = pixels / totalHeight;

    progressTag.css("width", 100 * percentage + "%");
  });

  $(".main_navbar_menu li").click(function () {
    const subMenu = $(this).find(".sub");

    // isOpen 상태에 따라 toggle 처리
    if (!isOpen) {
      subMenu.slideDown(); // 열림 상태면 slideDown()으로 보여줌
      isOpen = true;
    } else {
      subMenu.slideUp(); // 닫힘 상태면 slideUp()으로 숨김
      isOpen = false;
    }

    // isOpen 상태에 따라 CSS 스타일 변경
    if (isOpen) {
      subMenu.addClass("open");
    } else {
      subMenu.removeClass("open");
    }

    // 다른 .sub 요소들은 숨김 처리
    $(".sub").not(subMenu).slideUp().removeClass("open");
  });

  //마우스 오버시
  $(".main_navbar_menu li").mouseenter(function () {
    const subMenu = $(this).find(".sub");
    subMenu.slideDown();
    subMenu.addClass("active");
  });

  //햄버거 메뉴 클릭시
  $(".my-header-style__menu_btn").click(function () {
    $(this).toggleClass("fa-bars fa-times"); //햄버거 아이콘을 엑스 아이콘으로 변경
    $(".main_navbar_menu").toggleClass("main_navbar_menu--active"); //메뉴 열리고 닫히기
  });

  //다크모드/라이트모드 전환
  $(".darkmodetoggle").click(function () {
    $(this).toggleClass("fa-sun fa-moon");

    if (isLight) {
      document.body.dataset.theme = "dark-mode";
      isLight = false;
    } else {
      document.body.dataset.theme = "light-mode";
      isLight = true;
    }
  });
});
