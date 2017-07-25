//grid size
var rowSize = 8;
var colSize = 8;

var grid = document.getElementsByClassName('grid')[0];
var speed = 35;
var fps = 1000 / speed;
var frameNum = 0;
var direction = "UP";//initial direction
var control;

var foodTimer = 0;

function snakeElement(aPath, aCurrentRow, aCurrentCol, aCurrentDir){
   this.path = aPath;
   this.currentRow = aCurrentRow;
   this.currentCol = aCurrentCol || 3;
   this.currentDir = aCurrentDir || "UP";
};

var snakeArr = [];
function snakeInit(){    
    snakeArr.push(new snakeElement(document.getElementById('first'),  2));
    snakeArr.push(new snakeElement(document.getElementById('second'), 3));
    snakeArr.push(new snakeElement(document.getElementById('third'),  4));
};

function setDirection(){   
  for(var i = snakeArr.length -1; i > 0; i-- )  snakeArr[i].currentDir = snakeArr[i-1].currentDir;
  snakeArr[0].currentDir = direction;
}

function chooseSnakeDir(){
  for(var i = 0; i < snakeArr.length; i++){ 
    snakeArr[i].path.style.backgroundColor = "#ccc";   
    switch(snakeArr[i].currentDir){
       case "UP": snakeArr[i] = control.upMove(snakeArr[i] );       break;
       case "DOWN":  snakeArr[i] = control.downMove(snakeArr[i] );  break;
       case "RIGHT": snakeArr[i] = control.rightMove(snakeArr[i] ); break;
       case "LEFT":  snakeArr[i] = control.leftMove(snakeArr[i] );  break;
    }
    isFood(snakeArr[i].path, snakeArr[i].currentCol, snakeArr[i].currentRow, snakeArr[i].currentDir);
    snakeArr[i].path.style.backgroundColor="#777";
  } 
};

function mainLoop(){
if(frameNum > fps){
  setDirection();
  frameNum=0;
  foodTimer++;
  chooseSnakeDir()
}else  frameNum++;
if(foodTimer === 25){
  createPoint();
  foodTimer = 0;
}
requestAnimationFrame(mainLoop);
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
   control = new snakeControl();  
   snakeInit();
   createPoint();
   document.addEventListener("keydown", cooseDir, false);
   requestAnimationFrame(mainLoop);
};

function createPoint(){ 
  var pointCol = getRandomInt(0, 8);
  var pointRow = getRandomInt(0, 8);
  while(!checkPointLocation(pointCol, pointRow)){
    pointRow = getRandomInt(0, 8);
    pointCol = getRandomInt(0, 8);
  } 
  var i = 0;
  var point = grid.firstElementChild;
  while(i <= (pointRow ) * colSize + pointRow + pointCol - 1){
    point = point.nextElementSibling;
    i++;
  }
  point.setAttribute("food", true);
  point.style.backgroundColor = "red";  
};

function checkPointLocation(c,r){
   for(var i = 0; i < snakeArr.length; i++){        
         if(c == snakeArr[i].currentCol && r == snakeArr[i].currentRow)         
          return false;
    }
    return true;
};

function isFood(elem, col, row, dir){
  if(elem.hasAttribute("food")){
          console.log("eat" + " " + col + " " + row + " " + dir);  
          //snakeArr.push(new snakeElement(elem,  row, col, dir));
          elem.removeAttribute("food");
  }
};

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

init();