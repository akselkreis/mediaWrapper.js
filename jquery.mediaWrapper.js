// mediaWrapper.js: Simple responsive iframes
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreismedia.com

 (function( $ ){

  $.fn.mediaWrapper = function(options) {

    var settings = $.extend( {
      baseWidth   : 16,
      baseHeight  : 9
    }, options);

    return this.each(function() {
      var hRatio = (settings.baseHeight / settings.baseWidth) * 100;
      $(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: '+ hRatio +'% 0 0 0; " />').css("position","absolute").css("width", "100%").css("height", "100%").css("top", "0").css("left", "0");
    });

  };

})( jQuery );