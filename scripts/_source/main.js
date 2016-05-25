$(function(){
  'use strict';

  var $body = $('body'),
    $tabs = $('.manage__tab'),
    $screenshots = $('.manage__screenshot'),
    activeClass = 'active',
    hiddenClass = 'hidden';

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
        if ($(this).hasClass(hiddenClass)) {
          // hidden, so show
          $(this).removeClass(hiddenClass);
        }
      } else {
        if (!$(this).hasClass(hiddenClass)) {
          // shown, so hide
          $(this).addClass(hiddenClass);
        }
      }
    });
  };

  // initialize
  // ----------

  init();

});
