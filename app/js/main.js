var h = document.getElementById('menu');
var stuck = false;

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

var stickPoint = getDistance();

window.onscroll = function(e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  if ( (distance <= 0) && !stuck) {
    h.style.position = 'fixed';
    h.style.top = '0px';
    stuck = true;
  } else if (stuck && (offset <= stickPoint)){
    h.style.position = 'static';
    stuck = false;
  }
};
