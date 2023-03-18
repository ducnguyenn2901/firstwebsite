$('a[href*="#"]').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 100);
    return false;
  });