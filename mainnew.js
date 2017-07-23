
var first = document.getElementById('first');
var grid = document.getElementsByClassName('grid')[0];
var fps = 1000/20;
var frameNum = 0;
var direction = "UP";

var rowSize = 8;
var colSize = 8;

var curentRow = 2;
var currentCol = 3;


function simpleMove(){  
   if(frameNum > fps){
	   first.style.backgroundColor = "#ccc";       

      // first = first.nextElementSibling != null ? first.nextElementSibling : grid.firstElementChild;
      first = leftMove(first);

       first.style.backgroundColor="#777";
       frameNum=0;
   } else  frameNum++;
     requestAnimationFrame(simpleMove);
};


function rightMove(element){     
    if(currentCol < colSize){
      currentCol++; 
      element = element.nextElementSibling;  
    }else while(currentCol !== 0) {
      currentCol--;     
      element = element.previousElementSibling;
    }
    return element;
};



function leftMove(element){
    if(currentCol > 0){
      currentCol--; 
      element = element.previousElementSibling;  
    }else while(currentCol !== colSize) {
      currentCol++;     
      element = element.nextElementSibling;
    }
    return element;
};

function upMove(element){

};

function downMove(element){

};

function cooseDir(e){   
   switch(e.key){
    case "ArrowUp": direction = "UP"; console.log("UP"); break;
    case "ArrowDown": direction = "DOWN"; console.log("DOWN"); break;
    case "ArrowRight": direction = "RIGHT"; console.log("RIGHT"); break;
    case "ArrowLeft" : direction = "LEFT"; console.log("LEFT"); break;
   }
}

function init(){
    
   document.addEventListener("keydown", cooseDir, false);

   requestAnimationFrame(simpleMove);   

};

init();