$(document).ready(function () {
  // word switcher
  var switcher = $("#word-switcher");
  var delay = 2000;
  var count = switcher.find("p").length;

  //커서 깜빡이기
  const content = "홈페이지 만들기의 기본 \n HTML, CSS, JS공부하기";
  const $text = $(".text");
  let i = 0;

  function typing() {
    let txt = content[i++]; //한글자씩 더해주기
    $text.append(txt === "\n" ? "<br/>" : txt);
    //전체길이보다 i가 크게되면 컨텐츠 비우고 다시 0으로 만들어서 무한 반복 되게끔
    if (i > content.length) {
      $text.text("");
      i = 0;
    }
  }

  setInterval(typing, 200);

  function calculateWidths() {
    switcher.find("p").each(function (index) {
      $(this).attr("data-width", $(this).width());
    });
    switcher.width(switcher.find(".active").attr("data-width"));
  }

  function doChange() {
    var nextItem;
    var currentItem = parseInt(switcher.find(".active").attr("data-oid"));

    if (currentItem == count - 1) nextItem = 0;
    else nextItem = currentItem + 1;

    switcher.addClass("in");
    switcher.find('[data-oid="' + currentItem + '"]').removeClass("active");
    switcher.find('[data-oid="' + nextItem + '"]').addClass("active");
    switcher.width(
      switcher.find('[data-oid="' + nextItem + '"]').attr("data-width")
    );

    setTimeout(doChange, delay);
  }

  calculateWidths();

  $(window).resize(function () {
    calculateWidths();
  });

  setTimeout(doChange, delay);
});
