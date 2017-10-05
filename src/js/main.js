$(function(){
  $("a").on('click', function(){
    var href = $(this).prop("href");

    if (!href.match(/github.com/)) {
      window.open(href);
      return false;
    }
  });
});
