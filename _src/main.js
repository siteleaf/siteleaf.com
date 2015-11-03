$(function(){
  'use strict';

  // Variables
  // ---------

  var $window = $(window),
    $document = $(document),
    scrollInterval = 250,
    windowHeight = 0,
    bodyHeight = 0,
    scrollTop = 0,
    relativeScrollTop = 0,
    scrollBottom = 0,
    visibleBuffer = 200,
    $graphics = $('.js-graphic');

  // Functions
  // ---------

  var init = function() {
    $('body').addClass('is-js');
    setInitialValues();
    bindWindowResize();

    if ($window.scrollIntervalId) {
      // clear previous scrollIntervalId
      $window.prevScrollIntervalId = $window.scrollIntervalId;
      clearInterval($window.prevScrollIntervalId);
    }
    $window.scrollIntervalId = setInterval(updatePage, scrollInterval);

  };

  var setInitialValues = function() {
    windowHeight = window.innerHeight;
    updateValues();
  };

  var updatePage = function() {
    window.requestAnimationFrame(function() {
      updateValues();
      updateElements();
    });
  };

  var updateValues = function() {
    bodyHeight = $document[0].body.scrollHeight;
    scrollTop = window.pageYOffset;
    scrollBottom = scrollTop + windowHeight;
  };

  var updateElements = function() {
    $graphics.each(function() {
      var $graphic = $(this),
        graphicTop = $graphic.offset().top,
        graphicBottom = graphicTop + $graphic.height(),
        isVisible = ((scrollBottom >= graphicTop + visibleBuffer) && (scrollTop <= graphicBottom));

      if (isVisible) {
        $graphic.addClass('is-visible');
      } else {
        $graphic.removeClass('is-visible');
      }

    });
  };

  var bindWindowResize = function() {
    $window.bind('resize',
      function() {
        setInitialValues();
      }
    );
  };

  // Initialize
  // ----------

  init();

});
