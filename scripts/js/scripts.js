// Google Analytic stuff taken from admin.js of the app
// ==================================================================
var getQueryString, getQueryStringObject, updateURL, updatedQueryString;

window.trackGA = function(category, action, label, numberValue) {
  if (label == null) {
    label = "";
  }
  if (numberValue == null) {
    numberValue = null;
  }
  return ga("send", "event", category, action, label, numberValue);
};

window.clearGA = function() {
  return updateURL(updatedQueryString({
    "ga": "clear"
  }), true);
};

getQueryString = function() {
  return location.search.replace("?", "");
};

getQueryStringObject = function(parseThis) {
  var arr, bits, i, obj, str;
  if (!parseThis) {
    str = getQueryString();
  } else {
    str = parseThis;
  }
  arr = str.split("&");
  obj = {};
  i = 0;
  if (arr[0] === "") {
    return false;
  }
  while (i < arr.length) {
    bits = arr[i].split("=");
    obj[bits[0]] = bits[1];
    i++;
  }
  return obj;
};

updatedQueryString = function(data) {
  var key, newQS, oldQS;
  oldQS = getQueryStringObject();
  newQS = '?';
  key = void 0;
  for (key in data) {
    if (data[key] !== 'clear') {
      newQS += key + '=' + data[key] + '&';
    }
  }
  if (oldQS) {
    key = void 0;
    for (key in oldQS) {
      if (!data[key]) {
        newQS += key + '=' + oldQS[key] + '&';
      }
    }
  }
  return newQS.slice(0, -1);
};

updateURL = function(url, appendQS) {
  if (window.history && window.history.pushState) {
    if (appendQS) {
      url = "http://" + window.location.host + window.location.pathname + url;
    }
    return window.history.replaceState({}, document.title, url);
  }
};


document.addEventListener("DOMContentLoaded", function() {
  hljs.configure({
    languages: [] // Disable auto-detection
  });

  hljs.initHighlightingOnLoad();

  // Nav
  $('.main-nav-toggle').on('click', function(){
    document.body.classList.toggle('is-showing-nav');
  });

  // Check for GA param in query string
  // ==================================================================
  var queryString = getQueryStringObject();
  if(queryString.ga && queryString.ga == "deleted_account"){
    trackGA("user", "deleted account");
    clearGA();
  }

  // Homepage
  // ==================================================================
  var introSlider = document.getElementById('show-intro-video');

  if(introSlider){
    var video = document.getElementById('video');
    var f = document.getElementById('video-iframe');
    var url = f.getAttribute('src').split('?')[0];

    introSlider.addEventListener('click', function(){
      var data = { method: 'play' };
      video.classList.remove('is-hidden');
      introSlider.classList.add('is-hidden');
      f.contentWindow.postMessage(JSON.stringify(data), url);
    });
  }

  var features = []
  $('.image-carousel li').each(function(){
    features.push($(this))
  })

  if(features.length){
    var i = 1
    setInterval(function(){
      if (i === features.length) i = 0
      $feature = features[i]

      $('#features .item.active').removeClass('active')
      $('#features .item').eq(i).addClass('active')

      setTimeout(function(){
        $feature.addClass('fadein')
      }, 0)

      $('.image-carousel .active').removeClass('fadein').addClass('old')

      $feature.addClass('active')

      setTimeout(function(){
        $('.image-carousel .active.old').removeClass('active old')
      }, 500)

      i++
    }, 3500)
  }
});
