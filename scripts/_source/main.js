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

  var init = function() {
    $('body').addClass('js');
    initTabs();
    initModal();
    initFitVids();
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

  var iframe = $('#intro')[0],
    player = $f(iframe); // $f == Froogaloop

  var initModal = function() {
    $videoOpen.click(function(e) {
      e.preventDefault();
      showModal();
      return false;
    });
    $videoModal.click(function(e) {
      closeModal();
    });
    if (window.location.hash === '#video') {
      setTimeout(function() {
        showModal();
      }, 0);
    }
  };

  // esc key handler
  $(document).keydown(function(e) {
    if (e.keyCode == 27 && $body.hasClass(modalShownClass)) { // esc
      closeModal();
    }
  });

  var showModal = function() {
    $body.addClass(modalShownClass);
    // console.log(vimeo_player_loaded());
    setTimeout(function() {
      player.api('play');
    }, 300);
  };

  var closeModal = function() {
    player.api('pause');
    $body.removeClass(modalShownClass);
  };

  var initFitVids = function() {
    $('.article__content').fitVids();
  };

  // initialize
  // ----------

  init();

});
