//grid size
var rowSize = 8;
var colSize = 8;

var snakeArr = [];

var first = {   
   path :  document.getElementById('first'),
   currentRow: 2,
   currentCol: 3,
   currentDir: "UP"
};

var second = {   
   path :  document.getElementById('second'),
   currentRow: 3,
   currentCol: 3,
   currentDir: "UP"
};

var third = {   
   path :  document.getElementById('third'),
   currentRow: 4,
   currentCol: 3,
   currentDir: "UP"
};

snakeArr.push(first);
snakeArr.push(second);
snakeArr.push(third);

var grid = document.getElementsByClassName('grid')[0];
var fps = 1000/30;
var frameNum = 0;
var direction = "UP";

function setDirection(){   
  for(var i = snakeArr.length -1; i > 0; i-- )  snakeArr[i].currentDir = snakeArr[i-1].currentDir;
  snakeArr[0].currentDir = direction;
}

function snakeMove(){
if(frameNum > fps){
  setDirection();
  for(var i = 0; i < snakeArr.length; i++){ 
    snakeArr[i].path.style.backgroundColor = "#ccc";   
    switch(snakeArr[i].currentDir){
       case "UP":    snakeArr[i] = upMove(snakeArr[i] );    break;
       case "DOWN":  snakeArr[i]  = downMove(snakeArr[i] );  break;
       case "RIGHT":{ snakeArr[i]  = rightMove(snakeArr[i] );    break;}
       case "LEFT":  snakeArr[i]  = leftMove(snakeArr[i] );  break;
     }     
     snakeArr[i].path.style.backgroundColor="#777";
     frameNum=0;
  }
 } else  frameNum++;
 requestAnimationFrame(snakeMove);
};

function rightMove(element){     
    if(element.currentCol < colSize){
      element.currentCol++; 
      element.path = element.path.nextElementSibling;  
    }else while(element.currentCol !== 0) {
      element.currentCol--;     
      element.path = element.path.previousElementSibling;
    }
    return element;
};

function leftMove(element){
    if(element.currentCol > 0){
      element.currentCol--; 
      element.path = element.path.previousElementSibling;  
    }else while(element.currentCol !== colSize) {
      element.currentCol++;     
      element.path = element.path.nextElementSibling;
    }
    return element;
};

function upMove(element){
 var i = 0;
 if(element.currentRow > 0){
    while (i <= rowSize){ 
      i++;     
      element.path = element.path.previousElementSibling;  
    }
    element.currentRow--;
 }
 else{
   while (i <= rowSize * (rowSize +  1) - 1){ 
      i++;
        element.path = element.path.nextElementSibling;
  }
  element.currentRow = 8;
 }   
 return element;
};

function downMove(element){
 var i = 0;
 if(element.currentRow < rowSize){
    while (i <= rowSize){ 
      i++;      
      element.path = element.path.nextElementSibling;  
    }
    element.currentRow++;
 }
 else{
   while (i <= rowSize*(rowSize + 1) - 1){ 
      i++;
        element.path = element.path.previousElementSibling;
  }
  element.currentRow = 0;
 }   
 return element;
};

function cooseDir(e){
   switch(e.key){
    case "ArrowUp":   if(direction != "DOWN")  direction = "UP";    break;
    case "ArrowDown": if(direction != "UP")    direction = "DOWN";  break;
    case "ArrowRight":if(direction != "LEFT")  direction = "RIGHT"; break;
    case "ArrowLeft": if(direction != "RIGHT") direction = "LEFT";  break;
   }
};

function init(){    

   document.addEventListener("keydown", cooseDir, false);

   requestAnimationFrame(snakeMove);   

};

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

function newSnakeElement(aPath, aCurrentRow, aCurrentCol, aCurrentDir){
   this.path = aPath;
   this.currentRow = aCurrentRow;
   this.currentCol = aCurrentCol;
   this.currentDir = aCurrentDir;
};

function snakeInit(){

};

init();