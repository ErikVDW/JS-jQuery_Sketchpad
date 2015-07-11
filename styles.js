$(document).ready(function(){
  $('.block').mouseover(function(){
    $(this).css("background-color", "white");
  });
  $('button').click(function(){
    var sideLength = prompt("How many squares would you like per side on the grid?");
    
    $('.block').css("background-color", "black");
  });
});