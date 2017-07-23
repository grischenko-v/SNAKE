//grid size
var rowSize = 8;
var colSize = 8;

var grid = document.getElementsByClassName('grid')[0];
var speed = 35;
var fps = 1000 / speed;
var frameNum = 0;
var direction = "UP";//initial direction

function snakeElement(aPath, aCurrentRow, aCurrentCol, aCurrentDir){
   this.path = aPath;
   this.currentRow = aCurrentRow;
   this.currentCol = aCurrentCol || 3;
   this.currentDir = aCurrentDir || "UP";
};

var snakeArr = [];
function snakeInit(){    
    snakeArr.push(new snakeElement(document.getElementById('first'),  2));
    snakeArr.push(new snakeElement(document.getElementById('second'), 3))
    snakeArr.push(new snakeElement(document.getElementById('third'),  4))
};

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
       case "DOWN":  snakeArr[i] = downMove(snakeArr[i] );  break;
       case "RIGHT": snakeArr[i] = rightMove(snakeArr[i] ); break;
       case "LEFT":  snakeArr[i] = leftMove(snakeArr[i] );  break;
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
   snakeInit();  
   createPoint(); 
   document.addEventListener("keydown", cooseDir, false);
   requestAnimationFrame(snakeMove);
};

function createPoint(){
  var pointRow = getRandomInt(0, 8);
  var pointCol = getRandomInt(0, 8);
  var i = 0;
  var point = grid.firstElementChild;
  console.log("pointRow: " + pointRow + " pointCol: " + pointCol);
  console.log(point);
  while(i < (pointRow + 1) * (pointCol + 1) ){
   point = point.nextElementSibling;
   i++;
  } 
  console.log(point);
  point.style.backgroundColor = "red";

};

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


init();