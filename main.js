$(document).ready(function(){
  $('.header').height($(window).height());
})

//smooth scrolls
$('a[href*="#body"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})