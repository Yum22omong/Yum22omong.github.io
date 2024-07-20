$(document).ready(function () {
  var hasCounted = false; //애니메이션이 이미 실행되었는지 확인하기 위한 변수

  $(window).on("scroll", function () {
    var footerOffset = $(".my-footer-style").offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    if (scrollTop + windowHeight > footerOffset && !hasCounted) {
      hasCounted = true;

      $(".counting").each(function () {
        var $this = $(this);
        var countTo = parseInt($this.attr("data-count"));

        $({ countNum: parseInt($this.text()) }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 3000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }
  });
});
