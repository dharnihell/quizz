

$(document).ready(function(){
  $('ul').click(function(){
    $('ul').toggleClass('active')
    $('body').toggleClass('dark')
  });

   $('.menu-category').click(function(){
      $('.bg-modal').show(600);
    });

    $('.close-modal').click(function(){
      $('.bg-modal').hide(600);
    });

});

 function render() {
   $('ul').toggleClass('active');
   $('body').toggleClass('dark');
};