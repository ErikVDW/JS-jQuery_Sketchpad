// All blocks are square.


// Constants
var BLOCK_DIV = '<div class = "block"></div>';
var TABLE_BLOCK = '<td class="block"></td>';

var mouseDown = false;

function sectionAdd (reqBlocks) { // Used by div method
  var i = 0;
  while (i < reqBlocks) {
    $('div.block-container').append(BLOCK_DIV);
    i ++;
  }
}

function tableAdd (sideLength) { // Used by table method
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

/* IDEA - NOT IN USE

} */

function changeColor () { // Changes the color on mouseover
  // Add .click function for if it's already entered

  $('.block').mouseenter(function(){
    if (mouseDown) {
      $(this).css("background-color", "white"); 
    }
  });
}

function main(){
  
  // Determine dimensions / how many blocks to use

  var sideLength = parseInt(prompt("How many squares would you like per side on the grid?"),10); // Don't want any partial blocks

  if (Number.isInteger(sideLength) == false || sideLength >100) {
      console.log("Not an integer");
      sideLength = 100 // Set maximum for performance reasons (10,000 squares total)
  } 

  var dimension = (400/sideLength); // The width and height of each block

  var reqBlocks = Math.pow(sideLength, 2); // The number of blocks required to fill the area
  
  // Reseting and then using functions above to create a new grid

  // Div:

  $('.block').remove(); 
  sectionAdd(reqBlocks);
  $('.block').css({"width" : dimension, "height": dimension}); // jQuery version
  
  /* var blocks = document.getElementsByClassName('block') // JS version
    Array.from(blocks).forEach(function(block) {
      block.style.width = dimension +"px";
      block.style.height = dimension +"px";
    });
  */

  // Table:

  $('tr').remove();
  tableAdd(sideLength);
  changeColor();

}

$(function(){
  
  document.body.onmousedown = function() { 
    mouseDown = true;
  }
  document.body.onmouseup = function() {
    mouseDown = false;
  }

  $('button').click(main); // Call main function when "Clear" button clicked

  changeColor();  // Change the color of blocks when entered

});