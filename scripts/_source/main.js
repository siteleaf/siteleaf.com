$(function(){
  'use strict';

  var $body = $('body'),
    $tabs = $('.manage__tab'),
    $screenshots = $('.manage__figure'),
    activeClass = 'active',
    shownClass = 'shown';

  var init = function() {
    $('body').addClass('js');
    initTabs();
  };

  var initTabs = function() {
    $tabs.click(function(e) {
      $tabs.each(function(e) {
        $(this).removeClass(activeClass);
      });
      var handle = $(this).data('handle');
      showScreenshot(handle);
      $(this).addClass(activeClass);
      return false;
    });
  };

  var showScreenshot = function(handle) {
    $screenshots.each(function() {
      if ($(this).data('handle') == handle) {
        if (!$(this).hasClass(shownClass)) {
          // hidden, so show
          $(this).addClass(shownClass);
        }
      } else {
        if ($(this).hasClass(shownClass)) {
          // shown, so hide
          $(this).removeClass(shownClass);
        }
      }
    });
  };

  // initialize
  // ----------

  init();

});
