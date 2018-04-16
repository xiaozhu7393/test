function ban_img(a, b, w, h) { //a表示图片元素  b图片的父元素  wh图片自身的 宽度高度
  var $window = $(b);
  var $windowWidth = function() {
      return $window.width();
  };
  var $windowHeight = function() {
      return $window.height();
  };
  $window.fssResize(function() {
      var width = $windowWidth();
      var height = $windowHeight();

      $(b).each(function() {
          $this = $(this);
          $this.height(height).width(width);
          $this.triggerHandler("configuration", { height: height, width: width, items: { width: width } });
          $this.triggerHandler("updateSizes");
      });

  });

  $(a).each(function() {
      $(this).fullscreenstage({ 'width': w, 'height': h });
  });

  $(window).fssResize();
  $("#banner01").css({ "visibility": "visible" });
}