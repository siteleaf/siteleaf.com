$(function(){
  'use strict';

  var $body = $('body'),
    $tabs = $('.manage__tab'),
    $screenshots = $('.manage__figure'),
    activeClass = 'active',
    shownClass = 'shown',
    $videoOpen = $('#videoOpen'),
    $videoModal = $('#videoModal'),
    modalShownClass = 'isModalOpen';

  var iframe = document.getElementById('intro'),
    player = $f(iframe); // $f == Froogaloop

  var init = function() {
    $('body').addClass('js');
    initTabs();
    initModal();
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

  var initModal = function() {
    $videoOpen.click(function(e) {
      e.preventDefault();
      showModal();
      return false;
    });
    $videoModal.click(function(e) {
      closeModal();
    });
  };

  // esc key handler
  $(document).keydown(function(e) {
    if (e.keyCode == 27 && $body.hasClass(modalShownClass)) { // esc
      closeModal();
    }
  });

  var showModal = function() {
    $body.addClass(modalShownClass);
    setTimeout(function() {
      player.api('play');
    }, 300);
  };

  var closeModal = function() {
    player.api('pause');
    $body.removeClass(modalShownClass);
  };

  // initialize
  // ----------

  init();

});
