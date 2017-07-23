
var first = document.getElementById('first');
var grid = document.getElementsByClassName('grid')[0];
var fps = 1000/20;
var frameNum = 0;
var direction = "UP";

var rowSize = 8;
var colSize = 8;

var currentRow = 2;
var currentCol = 3;

function simpleMove(){  
   if(frameNum > fps){
	   first.style.backgroundColor = "#ccc";       
   
     switch(direction){
       case "UP":    first = upMove(first);    break;
       case "DOWN":  first = downMove(first);  break;
       case "RIGHT": first = rightMove(first); break;
       case "LEFT":  first = leftMove(first);  break;
     }
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
 var i = 0;
 if(currentRow > 0){
    while (i <= rowSize){ 
      i++;     
      element = element.previousElementSibling;  
    }
    currentRow--;
 }
 else{
   while (i <= rowSize * (rowSize +  1) - 1){ 
      i++;
        element = element.nextElementSibling;
  }
  currentRow = 8;
 }   
 return element;
};

function downMove(element){
 var i = 0;
 if(currentRow < rowSize){
    while (i <= rowSize){ 
      i++;      
      element = element.nextElementSibling;  
    }
    currentRow++;
 }
 else{
   while (i <= rowSize*(rowSize + 1) - 1){ 
      i++;
        element = element.previousElementSibling;
  }
  currentRow = 0;
 }   
 return element;
};

function cooseDir(e){   
   switch(e.key){
    case "ArrowUp":    direction = "UP";    break;
    case "ArrowDown":  direction = "DOWN";  break;
    case "ArrowRight": direction = "RIGHT"; break;
    case "ArrowLeft":  direction = "LEFT";  break;
   }
}

function init(){
    
   document.addEventListener("keydown", cooseDir, false);

   requestAnimationFrame(simpleMove);   

};

init();