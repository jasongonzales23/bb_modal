//TODO calculate this instead of hardcoding
var marginMultiplier = 272;

var slide = function(e) {
  e.preventDefault();
  var data = parseInt(e.target.dataset.slide);
  var leftPos = data * marginMultiplier * -1;
  $('.screenshot-images').css({"transform":"translate(" + leftPos +"px ,0)"});
  $('.nav').removeClass('active');
  $(this).addClass('active');
};

$('.nav').on('click', slide);
