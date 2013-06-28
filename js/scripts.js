document.addEventListener("DOMContentLoaded", function() {

  var introSlider = document.getElementById('show-intro-video');
  var video = document.getElementById('video');

  var f = document.getElementById('video-iframe');
  var url = f.getAttribute('src').split('?')[0];

  introSlider.addEventListener('click', function(){
    var data = { method: 'play' };
    video.classList.remove('is-hidden');
    introSlider.classList.add('is-hidden');
    f.contentWindow.postMessage(JSON.stringify(data), url);
  });

});
