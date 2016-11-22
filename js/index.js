$(document).ready(function(){
$('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 600, 'easeOutCubic');
  });

  $('#down').click(function() {
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    }, 600, 'easeOutCubic');
  });
});
