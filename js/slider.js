if (document.documentElement.clientWidth >= 767) {

$('.multi-carousel .carousel-item').each(function() {
    var next = $(this).next();
    if (!next.length) next = $(this).siblings(':first');
    next.children(':first-child').clone().appendTo($(this));
  });
  $('.multi-carousel .carousel-item').each(function() {
    var prev = $(this).prev();
    if (!prev.length) prev = $(this).siblings(':last');
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
  });

}