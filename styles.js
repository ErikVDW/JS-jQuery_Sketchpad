// All blocks are square.
// TODO: Compartmentalize further.

// Constants
var BLOCK_DIV = '<div class = "block"></div>';
var TABLE_BLOCK = '<td class="block"></td>'

// Used by div method

function sectionAdd (reqBlocks) { // 
  var i = 0;
  while (i < reqBlocks) {
    $('div.block-container').append(BLOCK_DIV);
    i ++;
  }
}

// Used by table method

function tableAdd (sideLength) {
  var i = 0;
  
  while (i < sideLength) {
    console.log("Check");
    $('tbody').append("<tr></tr>");
    i ++;
  }
  
  i = 0;
  
  while (i < sideLength) {
    console.log("Check");
    $('tr').append(TABLE_BLOCK);
    i ++;
  }

}

// Used by both

function changeColor () { // Changes the color on mouseover
  $('.block').mouseover(function(){
    $(this).css("background-color", "white");
  });
}

function main(){
  
  // Determine dimensions

  var sideLength = prompt("How many squares would you like per side on the grid?");
  if (sideLength > 100) {sideLength = 100} // Set maximum for performance reasons (10,000 squares total)
  var dimension = (400/sideLength); // The width and height of each block
  var reqBlocks = Math.pow(sideLength, 2); // The number of blocks required to fill the area
  
  // Divs

  $('.block').remove();
  sectionAdd(reqBlocks);
  $('.block').css({"width" : dimension, "height": dimension});

  $('tr').remove();
  tableAdd(sideLength);
  changeColor();

}

$(function(){
  $('button').click(main);
  changeColor();
});