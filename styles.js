function changeColor () {
  $('.block').mouseover(function(){
    $(this).css("background-color", "white");
  });
}
function sectionAdd (reqArea, blockDiv) {
  var i = 0;
  while (i < reqArea) {
    $('section').append(blockDiv);
    i ++;
  }
}
function tableAdd (reqArea, blockDiv) {
  //Determine number of rows and happens to be number of blocks req
  //Add those rows
  //
}

$(document).ready(function(){
  $('button').click(function(){
    var sideLength = prompt("How many squares would you like per side on the grid?");
    if (sideLength > 30) {sideLength = 30}
    var dimension = 960/sideLength;
    var reqArea = Math.pow(sideLength, 2);
    //var current = $('.block').length;
    var blockDiv = '<div class = "block"></div>';
    $('.block').remove();
    sectionAdd(reqArea, blockDiv);
    tableAdd ();
    $('.block').css({"width" : dimension, "height": dimension});
    $('.block').css("background-color", "black");
    changeColor();
  });
  changeColor();
});