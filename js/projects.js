$(function(){
  var adjustHeights = function(){
    $('.match-height-fuse').equalHeights();
    $('.match-height-Ford').equalHeights();
    $('.match-height-PMI').equalHeights();
    $('.match-height-skills').equalHeights();
  }

  adjustHeights();

  var pathname = window.location.pathname;
  var url      = window.location.href;

  window.setInterval(function(){
    adjustHeights();
    // console.log("there IS a better way!! So tireddddd");
  }, 1000);
});
