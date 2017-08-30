//grid size
var rowSize = 8;
var colSize = 8;

var grid = document.getElementsByClassName('grid')[0];
var resultField = document.getElementsByClassName('resualt')[0];
var resultStr = document.getElementsByClassName('score')[0];

var resulatValue = 0;
var speed = 90;
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
  this.path.style.backgroundColor = "#777";  
};

var snakeArr = [];
function snakeInit(){    
  snakeArr.push(new snakeElement(document.getElementById('first'),  2));
  snakeArr.push(new snakeElement(document.getElementById('second'), 3));
  snakeArr.push(new snakeElement(document.getElementById('third'),  4));  
};

function setDirection(){   
  for(var i = snakeArr.length - 1; i > 0; i-- )  snakeArr[i].currentDir = snakeArr[i-1].currentDir;
  snakeArr[0].currentDir = direction;
}

function chooseSnakeDir(){
  for(var i = 0; i < snakeArr.length; i++){ 
    snakeArr[i].path.style.backgroundColor = "#ccc";   
    switch(snakeArr[i].currentDir){
       case "UP":    snakeArr[i] = control.upMove(snakeArr[i] );    break;
       case "DOWN":  snakeArr[i] = control.downMove(snakeArr[i] );  break;
       case "RIGHT": snakeArr[i] = control.rightMove(snakeArr[i] ); break;
       case "LEFT":  snakeArr[i] = control.leftMove(snakeArr[i] );  break;
    }   
    snakeArr[i].path.style.backgroundColor="#777";   
  }  
};

var notEat = true;
function mainLoop(){  
  if(frameNum > fps){
    isFood(snakeArr[snakeArr.length-1].path,
          snakeArr[snakeArr.length-1].currentCol,
          snakeArr[snakeArr.length-1].currentRow,
          snakeArr[snakeArr.length-1].currentDir);
    setDirection();
    chooseSnakeDir();
    gameEnd();
    frameNum = 0;
    foodTimer++;    
  }else frameNum++;
  if(foodTimer === 30){  
    if(!notEat) createPoint();
      foodTimer = 0;
  }
  if(!youLose)requestAnimationFrame(mainLoop);
};

function cooseDir(e){
  var code;
  if(e.key) code = e.key;
  else if(e.code) code = e.code;
  else if(e.keyCode) code = e.keyCode;  
  switch(code){
    case "ArrowUp":   if(direction != "DOWN")  direction = "UP";    break;
    case "ArrowDown": if(direction != "UP")    direction = "DOWN";  break;
    case "ArrowRight":if(direction != "LEFT")  direction = "RIGHT"; break;
    case "ArrowLeft": if(direction != "RIGHT") direction = "LEFT";  break;
  }    
};

function init(){  
  control = new snakeControl();  
  resultField.innerHTML = resulatValue;
  snakeInit();
  createPoint();
  document.addEventListener("keydown", cooseDir, false);
  requestAnimationFrame(mainLoop);
};

function createPoint(){ 
  var pointCol = getRandomInt(0, 8);
  var pointRow = getRandomInt(0, 7);//bug
  while(!checkPointLocation(pointCol, pointRow)){
    pointRow = getRandomInt(1, 7);
    pointCol = getRandomInt(1, 7);
  } 
  var i = 0;
  var point = grid.firstElementChild;
  while(i <= (pointRow ) * colSize + pointRow + pointCol - 1){
    point = point.nextElementSibling;
    i++;
  }
  point.setAttribute("food", true);
  point.style.backgroundColor = "red";  
  notEat = true;
};

function checkPointLocation(c,r){
  for(var i = 0; i < snakeArr.length; i++){        
    if(c == snakeArr[i].currentCol && r == snakeArr[i].currentRow)         
      return false;
  }
  return true;
};

function isFood(elem, col, row, dir){
  var temp;
  var tempElem;
  var rempCol;
  if(elem.hasAttribute("food")){
    notEat = false;
    tempElem = elem;
    tempCol = col;
    var i = 0;
    elem.removeAttribute("food");
    updateResultField();
    speedUP(snakeArr.length-1);
    switch (dir){
      case "UP":  {
        for(let i = 0; i <= colSize; i++) tempElem = tempElem.nextElementSibling;
          temp = new snakeElement(tempElem, 
                                  snakeArr[snakeArr.length-1].currentRow + 1,
                                  snakeArr[snakeArr.length-1].currentCol ,
                                  snakeArr[snakeArr.length-1].currentDir);
          break;
      };
      case "DOWN": {
        for(let i = 0; i <= colSize; i++) tempElem = tempElem.previousElementSibling;
          temp = new snakeElement(tempElem, 
                                  snakeArr[snakeArr.length-1].currentRow - 1,
                                  snakeArr[snakeArr.length-1].currentCol ,
                                  snakeArr[snakeArr.length-1].currentDir);
          break;
      };
      case "LEFT":  {
        tempElem = tempElem.nextElementSibling;
        temp = new snakeElement(tempElem,
                                snakeArr[snakeArr.length-1].currentRow,
                                snakeArr[snakeArr.length-1].currentCol + 1,
                                snakeArr[snakeArr.length-1].currentDir);
        break;
      };
      case "RIGHT":  {
        tempElem = tempElem.previousElementSibling;
        temp = new snakeElement(tempElem,
                                snakeArr[snakeArr.length-1].currentRow,
                                snakeArr[snakeArr.length-1].currentCol - 1,
                                snakeArr[snakeArr.length-1].currentDir);
        break;
      };
    }     
    snakeArr.push(temp);   
  }
};

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var youLose = false;
function gameEnd(){
  for(var i = 1; i < snakeArr.length; i++){
    if(snakeArr[0].path == snakeArr[i].path){
      youLose = true;        
      resultStr.classList.add("lose");          
      resultStr.innerHTML = "<p>YOU LOSE!!! </p>"
                            + "<p> RESUALT:" + resulatValue + "</p>" 
                            + "<p>PRESS F5</p>";
      break;
    }         
  }    
};

function updateResultField(){
  resulatValue += 100;
  resultField.innerHTML = resulatValue;
};

function speedUP(value){   
  speed += 10; 
  fps = 1000 / speed;
};

init();