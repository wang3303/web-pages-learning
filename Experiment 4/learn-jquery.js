
// Lesson 1
$(document).ready(function(){

  // BASIC SELECTORS
  // $('body').css('border', '4px solid red');

  // BASIC ANIMATIONS
  $('.box:gt(0)').hide(1000).show(1000);

  // INDEX FILTERS
  // $('p:eq(2)').css('border', '4px solid red');
  // lt(2)
  // gt(2)

  // RELATIONSHIP FILTERS
  //$('.box:empty').css('border', '4px solid red');

  // ATTRIBUTE FILTERS
  $('a[href$=".co.uk"]').css('border', '4px solid red');

});



// Lesson 2
$(function(){

  // ATTR METHOD
  //$('p:first').attr('class', 'not-lead');

  // IMAGE SWAP
  $('img').attr('src', 'img2.jpg');
  // $('img').delay(400).fadeOut(500, function(){
  //   $(this).attr('src', 'img2.jpg').fadeIn(500);
  // });

  // CLASS METHODS
  //$('p').toggleClass('blue').removeClass('lead');

  // CONTENT METHODS
  //$('p:first').html('<a href="google.com">link</a>');
  // $('input').val('yo dude!');

});



// Lesson 3
$(function(){

  // DOM TRAVERSAL
  // $('h2').parents('section').siblings('header').children().css('border', '4px solid red');


  // EVENT BINDING
  // $('html').keypress(function(){
  //   $(this).toggleClass('blue');
  // });


});
